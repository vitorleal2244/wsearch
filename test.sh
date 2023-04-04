#!/bin/sh

# Author : Vitor Leal

echo -e "Hello, "$USER".\nWelcome to the BICE build script!\nVersion 0.1"
echo -e "Which build option do you wish to use?\n1. Frontend (default)\n2. Backend\n3. Database\n4. Production"
echo -n "Enter your choice [1-4] or press [ENTER]:"
read choice
if [[ $choice == "1" ]];
then
  echo "Option 1 selected"
  cd ./angular
  ng serve
  cd ..
fi
