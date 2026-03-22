@echo off
echo ========================================
echo   Pushing SureSuccess to GitHub...
echo ========================================
echo.
cd /d "%~dp0"
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo SUCCESS! Code pushed to GitHub.
    echo You can now deploy on Vercel.
) else (
    echo Push failed. You may need to sign in to GitHub.
    echo Try running: git push -u origin main
)
echo.
pause
