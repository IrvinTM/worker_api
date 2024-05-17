## API for Chat Completion

This API is designed to receive a message array in a POST request and generate a response using the G4F library.

## API Usage

POST /
Request:
Method: POST
Headers:
Content-Type: application/json (required)
Body:

```JSON
{
  "messages": ["message 1", "message 2", ...]
}
```