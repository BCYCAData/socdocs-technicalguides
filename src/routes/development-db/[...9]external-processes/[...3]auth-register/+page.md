---
title: The Sign Up Processes
description: Signing up a new User 
---

## Process Overview

# {$frontmatter.title}

{$frontmatter.description}

<script>
    const mermaidOptions = {
        theme: 'forest'
      }
</script>

<MermaidDiagram {mermaidOptions}>
        graph TD
          A[Christmas] -->|Get money| B(Go shopping)
          B --> C{`Let me think`}
          B --> G[/Another/]
          C ==>|One| D[Laptop]
          C -->|Two| E[iPhone]
          C -->|Three| F[fa:fa-car Car]
          subgraph section
            C
            D
            E
            F
            G
          end
</MermaidDiagram>
