## フローチャート記法

[より詳細な使い方はこちら(外部リンクが開きます)](https://mermaid-js.github.io/mermaid/#/)

==以下は全て div タグの mermaid 内のみ適用されます。==

**例**

```
graph TD
    Start --> Stop
```

**出力**

<div class="mermaid">
graph TD
    Start --> Stop
</div>

**例**

```
graph LR
    Start --> Stop
```

**出力**

<div class="mermaid">
graph LR
    Start --> Stop
</div>

**例**

```
graph LR
    id1[(Database)]
```

**出力**

<div class="mermaid">
graph LR
    id1[(Database)]
</div>

**例**

```
graph LR
   a --> b & c--> d
```

**出力**

<div class="mermaid">
graph LR
   a --> b & c--> d
</div>

**例**

```
graph TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
```

**出力**

<div class="mermaid">
graph TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
</div>

**例**

```
graph LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```

**出力**

<div class="mermaid">
graph LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
</div>

**例**

```
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end
```

**出力**

<div class="mermaid">
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end
</div>

**例**

```
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

**出力**

<div class="mermaid">
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses 
</div>

**例**

```
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
```

**出力**

<div class="mermaid">
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15 
</div>
