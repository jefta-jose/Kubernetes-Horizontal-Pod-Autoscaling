# Kubernetes-Horizontal-Pod-Autoscaling
# Kubernetes-Horizontal-Pod-Autoscaling

This project demonstrates a simple Node.js application designed to simulate CPU load and serve as a practical example for Kubernetes Horizontal Pod Autoscaling (HPA).

## Features

- **CPU Load Simulation Endpoint**:  
  The application exposes a `/cpu` endpoint that artificially stresses the CPU for 500 milliseconds per request, making it suitable for testing autoscaling scenarios based on CPU usage.
- **Easy to Deploy**:  
  Includes a `Dockerfile` for containerized deployment, making it straightforward to run in a Kubernetes cluster.

## Usage

### Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```
   The server runs on port `3000`.

3. **Simulate CPU Load:**
   Visit `http://localhost:3000/cpu` to trigger CPU load simulation.

### Running with Docker

1. **Build the Docker image:**
   ```bash
   docker build -t hpa-demo .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:3000 hpa-demo
   ```

## Deploying on Kubernetes

This application is intended for use with a Kubernetes cluster and Horizontal Pod Autoscaler.  
You can deploy this container image, set up appropriate resource requests/limits, and configure an HPA to scale based on CPU usage.

## Example Use Case

- Demonstrate how Kubernetes HPA scales pods up and down in response to CPU load.
- Test and showcase autoscaling configurations in Kubernetes environments.

## License

No license specified.

---

> _Maintained by [jefta-jose](https://github.com/jefta-jose)_
