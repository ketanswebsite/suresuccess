@echo off
echo ========================================
echo   SureSuccess - Local Dev Setup
echo ========================================
echo.
cd /d "%~dp0"

echo Step 1: Cleaning old node_modules...
if exist node_modules (
    rmdir /s /q node_modules
)
if exist .next (
    rmdir /s /q .next
)

echo Step 2: Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo npm install failed!
    pause
    exit /b 1
)

echo Step 3: Starting dev server...
echo.
echo   Open http://localhost:3000/exams in your browser
echo   Press Ctrl+C to stop
echo.
call npx next dev --turbopack
pause
