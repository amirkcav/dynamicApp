#!/bin/bash

ng build --environment=prod --base-href /portal/_dist/  --target=production
#rm -r cache.cav.local:/cav/tomcat7/webapps/portal/_dist/*
scp -r dist/* cache.cav.local:/cav/tomcat7/webapps/portal/_dist/
