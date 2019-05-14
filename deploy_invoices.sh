#!/bin/bash

ng build --environment=invoices --base-href /portal/invoices/  --target=production
#rm -r cache.cav.local:/cav/tomcat7/webapps/portal/_dist/*
scp -r dist/* cache.cav.local:/cav/tomcat7/webapps/portal/invoices/
