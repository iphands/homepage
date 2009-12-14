#!/bin/bash
package=$1
num=$2
limit=$3
if [ "$num" == "" ] || [ "$limit" == "" ] || [ "$package" == "" ]
 then
  echo "Please launch $0 with 3 arguments ($0 <package-name> <low-jN> <high-jN>)" ; exit 1
fi

cp /etc/make.conf /etc/make.conf.bak
cd /etc/
cat make.conf | sed -e 's/-j[0-9]*/-j1/' > /tmp/make.conf.tmp
echo "Running Pre-Test Build..."
echo -e "Distpar Results For $package:\n" > ~/$package.emerge.results.txt
emerge --quiet $package 3>&2>&1 > /dev/null

while [ "$num" -le "$limit" ]
 do

  cat /tmp/make.conf.tmp | sed -e 's/-j[0-9]/-j'$num'/' > make.conf

  echo "Build with -j${num}"
  #echo "-j${num}" >> ~/$package.emerge.results.txt
  cat /etc/make.conf | grep MAKEOPT >> ~/$package.emerge.results.txt
  /usr/bin/time -o /tmp/time.out -f %E emerge $package 3>&2>&1 > /dev/null
  if [ "$?" != "0" ]
   then
    break
  fi
  cat /tmp/time.out >> ~/$package.emerge.results.txt
  echo "" >> ~/$package.emerge.results.txt

  num=`expr $num + 1`
done

cp /etc/make.conf.bak /etc/make.conf
