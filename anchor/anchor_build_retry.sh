#!/bin/bash

# File: anchor_build_retry.sh

LOGFILE="anchor_build.log"

echo "Starting continuous Anchor build..."
echo "Logs will be written to $LOGFILE"
echo "Press Ctrl + C to stop."

while true; do
    echo "Running anchor build at $(date)" | tee -a "$LOGFILE"
    anchor build >> "$LOGFILE" 2>&1

    if [ $? -eq 0 ]; then
        echo "✅ Build succeeded at $(date)!"
        break
    else
        echo "❌ Build failed at $(date). Retrying in 10 seconds..."
        sleep 10
    fi
done
