from bs4 import BeautifulSoup
import urllib2
import re

import json
from collections import Counter


DAYS = 6
EVERYTHING = {}

THE_states = [
	'australia',
	'nsw',
	'act',
	'wa',
	'nt',
	'vic',
	'sa',
	'tas'
]

def process_topic (topic):
	global EVERYTHING, THE_states

	other = []
	postcodes = []
	states = []

	for item in topic:
		if re.search ('-\d{4}', item):
			postcodes.append (item[-4:])
		elif item.lower().strip() in THE_states:
			states.append (item)
		else:
			item = item.replace ('-', ' ')
			# just item
			other.append (item)

	for postcode in postcodes:
		if postcode not in EVERYTHING:
			EVERYTHING[postcode] = []

		EVERYTHING[postcode].extend (other)

	for state in states:
		if state not in EVERYTHING:
			EVERYTHING[state] = []

		EVERYTHING[state].extend (other)

for i in xrange(1, DAYS):
	URL = "http://www.abc.net.au/news/archive/2013,12,%02d" % i
	#print "URL=", URL

	loaded = False
	uappend = ""
	seen = ['?page=1']
	while not loaded:
		loaded = True
		page = urllib2.urlopen (URL + uappend).read()
		uappend = ""
		soup = BeautifulSoup(page)

		topics = []
		for link in soup.select('#article-index')[0].find_all ('a'):
			addr = link.get ('href')
			if addr.startswith ('/news/2013'):
				if topics:
					process_topic (topics)

				topics = []
			elif addr.startswith ('/news/topic/'):
				topics.append (addr.replace ('/news/topic/', ''))

			"""elif addr.startswith ('?page='):
				if addr not in seen:
					if not uappend:
						uappend = addr
						loaded = False
						seen.append (addr)
						#print "will load" ,uappend"""


for names in EVERYTHING:
	EVERYTHING[names] =  Counter (EVERYTHING[names])

print json.dumps(EVERYTHING)