---
title: Admin User Journeys
description: User journeys for Admin users
---

# {$frontmatter.title}

{$frontmatter.description}

## Site Administration

### Send Messages

### Role Management

## User Administration

### New User Reports

### Kits Delivered Reports

## Emergency Administration

### Reports

#### RFS Street Report

#### RFS Property Report

### Service Map

## Community Administration

### Information Sheet Requests

### Workshop Information Requests

### Event Information Requests

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
