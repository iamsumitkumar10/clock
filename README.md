graph LR
A[Git Push] --> B[Jenkins Trigger]
B --> C[Build Docker Image]
C --> D[Run Tests]
D --> E[Push to Registry]
E --> F[Deploy to Minikube]
F --> G[(Kubernetes Cluster)]
