@echo off
echo Starting Developer Portfolio...

:: Check if node_modules exists, if not install dependencies
IF NOT EXIST "node_modules\" (
    echo Installing dependencies...
    call npm install
)

echo Starting development server...
call npm run dev

pause
