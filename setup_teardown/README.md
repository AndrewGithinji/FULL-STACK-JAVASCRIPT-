Your job is to use the setup/teardown and organizational skills you have learned to better organize the specs. You should

Mimic the file structure of the src folder and create individual files for each module you are importing
Use parent and child suites to organize the specs so that it is clear what each pairing does and which utility it belongs to when viewing the results in the spec reporter.
Once your specs are organized, use information from the spec reporter to track down the error that is causing one of the specs to fail and correct it.

Suggested Plan of Attack
Create a utilities folder in tests and separate the specs onto their respective files to match the structure of the src folder.
Organize each test pair into a suite with a description. Create parent suites and name accordingly for types of utilities. 3 Place any data needed to run the tests into the appropriate describe blocks for scoping.
Run the tests and locate the error.
Fix the error in the appropriate file.
Run tests again to ensure all tests pass.
