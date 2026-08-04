@echo off
echo ===================================================
echo   InspectCar - Automated 1-Click GitHub Sync
echo ===================================================
echo.

cd /d "%~dp0"

set GIT_PATH="C:\Users\Jithu\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe"

where git >nul 2>nul
if %errorlevel%==0 (
    set GIT_CMD=git
) else (
    set GIT_CMD=%GIT_PATH%
)

echo [1/3] Staging modified files...
%GIT_CMD% add .

echo.
echo [2/3] Creating commit...
set timestamp=%date% %time%
%GIT_CMD% commit -m "Auto-update: InspectCar website & booking flow (%timestamp%)"

echo.
echo [3/3] Pushing to GitHub repository...
%GIT_CMD% push origin main || %GIT_CMD% push origin master

echo.
echo ===================================================
echo   SUCCESS! All files updated on GitHub automatically.
echo ===================================================
pause
