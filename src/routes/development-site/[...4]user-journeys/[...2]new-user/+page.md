---
title: New User Journeys
description: User journeys for New users
---

# {$frontmatter.title}

{$frontmatter.description}

A Casual User can become a Registered User by:

:::admonition type="info"
Clicking the `Tap here to find out if you qualify` button
or
by clicking the `Sign In` button and Clicking the `Create an Account` button.
Either action will launch the ***Address Challenge*** process.
:::

## Address Challenge

- The User enters a Street Address and Suburb into the form on the Client side.
- The Client validates the entered Street Address and Suburb. This validation checks if the address and suburb are correctly structured and do not contain any invalid characters or terms.
- If the address and suburb are valid, the Client triggers the submitForm function. This function sets the loading state to true, indicating that a process is ongoing.
- The submitForm function on the Server sends a POST request to the /api/data/validateaddress endpoint. The body of the request contains the uppercase versions of the street address and suburb.
- The API receives the request and validates the address. It checks if the address exists in its database.
- If the address is found in the database, the API returns the address data with a status of 200. This data includes various details about the address, such as its status, the original search address, whether it's a valid address and suburb, its principal address site ID, its address point, its community, and its KYNG.
- If the address is not found in the database, the API returns an error status of 403.
- The submitForm function on the Server receives the response from the API. It then updates the addressPointData with the data returned from the API and sets the loading state to false.
- The Client receives the updated addressPointData and displays the relevant information or error message to the User.
- If the address or suburb entered by the User is not valid, the Client displays a validation error to the User.

<https://github.com/BCYCAData/soc-dev/blob/ccde84bea25514b8a58cf493ede4d810776eaf9f/src/components/form/address-challenge/AddressUnchallenged.svelte#L19C1-L22C1>

<script>
    const mermaidOptions = {
        theme: 'forest'
      }
</script>

<MermaidDiagram {mermaidOptions}>
  sequenceDiagram;
  participant User
  Note right of User: Text in note
  participant Client
  participant Function as "public.get_addresspoint_from_address"
  participant Database
  participant Server
  User ->> Client: Enters Street Address
  Client -->> Client: Validate Street Address
  User ->> Client: Enters Suburb
  Client -->> Client: Validate Suburb
  alt [Address & Suburb Valid]
    Client -->> Server: Call public.get_addresspoint_from_address
    Server -->> Function: Call with parameters
    Function -->> Database: SQL Query 1\n(store search address)
    Function -->> Database: SQL Query 2\n(form where clause)
    Database -->> Database: Check if address exists in custom_address
    alt [Address found in custom_address]
      Database -->> Function: Return address data from custom_address
    else [Address not found in custom_address]
      Database -->> Database: Check if address exists in project_addresspoints
      alt [Address found in project_addresspoints]
        Database -->> Function: Return address data from project_addresspoints
      else [Address not found in project_addresspoints]
        Database -->> Database: Check if address is valid using external API
        alt [Address is valid]
          Database -->> Function: Return error status (404) with empty address
        else [Address is not valid]
          Database -->> Function: Return error status (403) with original search address
        end
      end
    end
    Function -->> Server: Return address data to Server
    Server -->> Client: Return address data to Client
  else [Address or Suburb not Valid]
    Client -->> Client: Display validation error to User
  end
</MermaidDiagram>

### Invalid Address

### Ineligible Address

### Eligible Address

### System Error

## User Registration

### Register Email & Password

### Confirm Email

### User Survey
