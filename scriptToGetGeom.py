import urllib2,json

data=json.load(urllib2.urlopen("http://envirohack.research.nicta.com.au/fsdf-topology/units/?unitType=STATE"))
for i in xrange(len(data)):
	#print i["simplifiedGeometryURL"]
	coor=json.load(urllib2.urlopen(data[i]["simplifiedGeometryURL"]))
	#print coor["features"][0]["geometry"]["coordinates"]
	f=open('myfile'+str(i),'w')
	f.write(str(coor["features"][0]["geometry"]["coordinates"][0][0]))
	f.close
	