function ServerFundamentals() {
    return (
      <div style={{ padding: '20px' }}>
        <h2> Deep Dive into Server-Side Fundamentals</h2>
        
        <div
          style={{
            backgroundColor: '#f4faff',
            border: '2px solid #4fc3f7',
            borderRadius: '12px',
            padding: '25px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            lineHeight: '1.8',
          }}
        >
          <p>
            <strong>Server-side fundamentals</strong> encompass the essential concepts, mechanisms, and architecture that allow a web server to handle client requests securely, efficiently, and reliably. These principles not only power the functionality behind most modern web applications but also ensure that data and users are handled correctly at every stage.
          </p>
  
          <h3> Authentication & Authorization</h3>
          <p>
            Authentication is the process of verifying the identity of a user. This is usually done through login credentials like usernames, passwords, or tokens. Once a user is authenticated, <strong>authorization</strong> takes over to determine what resources or actions the user is permitted to access. This distinction is crucial—
            <em>authentication answers “Who are you?” while authorization answers “What can you do?”</em>
          </p>
  
          <h3> Session Management</h3>
          <p>
            Since HTTP is a stateless protocol (it doesn’t remember previous interactions), <strong>session management</strong> is necessary to maintain continuity between client and server. Sessions allow a server to "remember" users across multiple requests, enabling things like staying logged in or preserving a shopping cart. This is often achieved through:
          </p>
          <ul>
            <li>Cookies</li>
            <li>JWT (JSON Web Tokens)</li>
            <li>Session IDs stored in databases or memory stores like Redis</li>
          </ul>
  
          <h3> Request Handling and Routing</h3>
          <p>
            When a user interacts with a web application (e.g., clicking a button or submitting a form), the frontend sends a request to the backend. The server processes this request by using a routing system that maps URLs and HTTP methods (GET, POST, PUT, DELETE) to specific pieces of server logic. This logic is often implemented using frameworks like Express.js (Node), Django (Python), or Spring Boot (Java).
          </p>
  
          <h3> Data Storage and CRUD Operations</h3>
          <p>
            The server is responsible for interacting with databases to <strong>Create, Read, Update, and Delete (CRUD)</strong> data. This is often done through APIs (Application Programming Interfaces), which expose structured endpoints that the frontend can call. The server ensures that only authorized users can modify or retrieve specific pieces of data, and that all data is validated and secured before being stored.
          </p>
  
          <h3> Logging and Monitoring</h3>
          <p>
            Every critical operation or error should be <strong>logged</strong> on the server. Logging helps:
          </p>
          <ul>
            <li>Track user activities (e.g., login attempts, issue submissions)</li>
            <li>Detect and investigate bugs</li>
            <li>Audit changes and maintain accountability</li>
          </ul>
          <p>
            Logs are often written to files, cloud storage, or logging platforms like Logstash, Splunk, or Winston (Node.js).
          </p>
  
          <h3> Security Practices</h3>
          <p>
            Server-side development also involves enforcing security practices like:
          </p>
          <ul>
            <li><strong>Input validation</strong> to prevent injection attacks</li>
            <li><strong>Rate limiting</strong> to block brute-force attacks</li>
            <li><strong>CORS</strong> (Cross-Origin Resource Sharing) rules</li>
            <li><strong>HTTPS</strong> encryption</li>
            <li><strong>Environment-based configurations</strong> to avoid exposing secrets</li>
          </ul>
  
          <h3> APIs and Server Responses</h3>
          <p>
            Servers expose <strong>RESTful</strong> or <strong>GraphQL APIs</strong> to handle client requests. A good server must respond with proper HTTP status codes (e.g., 200 OK, 401 Unauthorized, 404 Not Found), and handle both success and error cases gracefully.
          </p>
  
          <h3> Real-World Analogy</h3>
          <p>
            Imagine a <strong>server</strong> as a receptionist in an office building:
          </p>
          <ul>
            <li>It checks who you are (authentication)</li>
            <li>Sees if you're allowed to enter a specific room (authorization)</li>
            <li>Keeps track of what you've done in the building (logging)</li>
            <li>Tells you where to go and answers questions (routing and responses)</li>
            <li>Files paperwork or retrieves documents (data storage)</li>
          </ul>
  
          <p>
            This foundational knowledge is <strong>critical</strong> whether you’re working on backend development or simulating server-side behavior in frontend applications (as done in this Help Desk project). Even without a physical backend, you can emulate these principles using tools like <code>localStorage</code>, client-side routing, and token simulation in React.
          </p>
        </div>
      </div>
    );
  }
  
  export default ServerFundamentals;
  