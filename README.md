# History

Just a collection to store the change history.

Each document in the history will see only those who are entitled to it, because it is a graph.

Documents can be inserted only on the server.

## Using

```
meteor add shuttler:history
```

### Fields

#### _target
Reference to user to make a operation.

#### _source
Reference to a document whose rights apply to this entry.

#### _object
Reference to the document with which the event triggered.

#### type
Required field storing for event name.

#### date
Automatically fills the field of the exact moment of the origin of the event.

#### data
Optional custom data.

### Helpers
To default graph helpers added helper `object`.

## Versions

### 0.0.2
* History is graph now.

### 0.0.1
* README.md