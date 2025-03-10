#!/bin/bash

# Replace imports in UI components
find components/ui -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "@/lib/utils"|from "../../lib/utils"|g'
find components/ui -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "@/components/ui/|from "./|g'
find components/ui -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "@/hooks/|from "../../hooks/|g'

# Fix any imports in hooks directory
find hooks -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "@/components/|from "../components/|g'

echo "Import paths updated" 