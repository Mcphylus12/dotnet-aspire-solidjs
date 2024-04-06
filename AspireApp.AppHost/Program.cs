var builder = DistributedApplication.CreateBuilder(args);

var apiService = builder.AddProject<Projects.AspireApp_ApiService>("apiservice");

builder.AddNpmApp("SolidFrontend", "../AspireApp.WebApp")
    .WithReference(apiService)
    .WithEndpoint(containerPort: 3000, scheme: "http", env: "VITE_PORT")
    .PublishAsDockerFile();

builder.Build().Run();
