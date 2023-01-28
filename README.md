# bundler tests results

This repo contains the test results made by the bundler-test-executor.

Directory structure (see bundler-test-executor's build.yml of actual deployment)

- each run creates a folder named `/runs/yyyymmdd/hhmmss/`
- the symlink `/runs/latest` always points to the latest pushed folder.
- at the root of each folder (including root) there is an `index.txt` file, with names of all files and folders
- for each run, the folder will contain the files:
  - `index.txt`
  - and for each launcher:
  - `{launcher}.xml` - junit-xml output of pytest
  - `{launcher}.json` -  the junit-xml file converted into json
  - `{launcher}.txt` - raw python output

