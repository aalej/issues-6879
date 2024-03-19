# Repro for issue 6879

## Versions 
firebase-tools: v13.5.1 and v12.9.0<br>
node: v20.10.0<br>
platform: macOS Sonoma 14.3.1

## Steps to reproduce

1. Run `cd functions`
1. Run `node build.js` to build to dist
1. Run `cd ../`
1. Run `firebase deploy --project <project_id>`
   - Should deploy function without any issues
1. Run `cd functions`
1. Run `node build.js` to rebuild
1. Run `cd ../`
1. Run `firebase deploy --project <project_id>`
   - It shows
```
i  functions: Skipping the deploy of unchanged functions with experimental support for skipdeployingnoopfunctions
✔  functions[api-func1Api(us-central1)] Skipped (No changes detected)
✔  functions[api-func2Api(us-central1)] Skipped (No changes detected)
```