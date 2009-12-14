#!/bin/sh

procs=1
	# Make a backup of make.conf
cp /etc/make.conf /etc/make.bak
while [ $procs -lt 10 ];
do 
emerge gxine ###### CHANGE THIS TO TEST DIFFERENT BUILDS ######
procs=`expr $procs + 1`
echo "Thread count: $procs"
cp /etc/make.bak /etc/make.conf
	#edit the make.conf for next emerge and save as temp
cat /etc/make.conf | sed -e "s/-j1*/-j$procs/g" >/etc/make.conf.tmp ###### CHANGE THE -jN TO MATCH YOUR MAKE.CONF ######
	#write the temp copy to make.conf for use
mv /etc/make.conf.tmp /etc/make.conf
	#less /etc/make.conf **use this to test sed commands
done
	# Replace make.conf when done
cp /etc/make.bak /etc/make.conf
