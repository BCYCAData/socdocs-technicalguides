---
title: The Log-In Processes
description: Logging in a registered User 
---

# {$frontmatter.title}

{$frontmatter.description}

## Process Overview

<script>
    const mermaidOptions = {
        theme: 'forest'
      }
</script>

<MermaidDiagram {mermaidOptions}>
sequenceDiagram
    participant u as user
    participant c as client
    participant a as api
    participant sb as supabase
    participant ss as SS NSW
    u->>+c: Street, Suburb
    c-->c: Format: Uppercase & <br>Abbreviations
    c->>+a: fetch(street, suburb)
    a->>+sb: call rpc('get_addresspoint_from_address')
    sb->>+ss: "https://portal.spatial.nsw.gov.au/server/rest/services"<br>"/NSW_Geocoded_Addressing_Theme/FeatureServer/1/query?" <!-- markdownlint-disable-line MD034 -->
    ss-->>-sb: features | error
    sb-->sb: community
    sb-->>-a: return_status,valid_address<br>principaladdresssiteoid,<br>addresspoint_geom,community,message
    alt api error
        a-->>c: status = 418
    else
        a-->>-c: status & address data
    end
    alt status=403
        c-->>u: AddressIneligible
    else  status=401
        c-->>u: AddressEligible
    else  status=500
        c-->>u: AddressSystemError
    else  status=200
        c-->>-u: AddressValid/>
        u->>+c: Email, Password
        c->>+a: principaladdresssiteoid, addressmetadata, <br/>addresspoint
        a->>+sb: call auth.signUp(email, password, principaladdresssiteoid, , <br/>addresspoint,addressmetadata,emailRedirectTo)
        Note right of sb: Confirm email sent
        sb-->>-a: return_status
        alt errorSignUp
            a-->>c: status: 400<br/>error message
        else
            a-->>-c: status: 302<br/>Location: '/auth/redirect'
        end
        sb-->sb: trigger:handle_new_user()
        sb-->sb: trigger:insert_new_user_profile()
        Note right of sb: Set metadata: 'havesurvey' & 'user'
        sb-->sb: trigger:insert_new_user_bcyca_profile()
        sb-->sb: trigger:handle_property_profile()
        Note right of sb: Set metadata: 'property'
        sb->>+ss: "https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/FeatureServer/0/query?" <!-- markdownlint-disable-line MD034 -->
        sb->>+ss: "https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Land_Parcel_Property_Theme/FeatureServer/12/query?" <!-- markdownlint-disable-line MD034 -->
        sb-->sb: trigger:set_survey_responses()
        alt Email confirmed
             sb-->c: redirectType === 'signup'
             alt haveSurveyResponses
                 sb-->c: SignUpSuccess With Survey Message
            else
                 sb-->sb: SignUpSuccess Without Survey Message
            end
        else
             sb-->sb: await response
        end
    end
</MermaidDiagram>
