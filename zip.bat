@ECHO ON
SET SourceDir=D:\Code\youiWingman\youiWingman
SET DestDir=D:\Code\youiWingman
CD /D "C:\Program Files\7-Zip"
7z.exe a "%DestDir%\youiWingman.zip" "%SourceDir%\package.json"
7z.exe a "%DestDir%\youiWingman.zip" "%SourceDir%\index.js"
7z.exe a "%DestDir%\youiWingman.zip" "%SourceDir%\node_modules"