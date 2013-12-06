import urllib2,json

data=json.load(urllib2.urlopen("http://envirohack.research.nicta.com.au/fsdf-topology/units/?unitType=STATE"))
for i in data:
	print i["simplifiedGeometryURL"]
	coor=json.load(urllib2.urlopen(i["simplifiedGeometryURL"]))
	print coor["features"][0]["geometry"]["coordinates"]
	break