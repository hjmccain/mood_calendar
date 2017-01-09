- Create users table //
create table if not exists users (
		id serial primary key,
		username text not null,
		password text not null

);

- Create entries table //
create table if not exists entries (
		id serial primary key,
		mood text not null,
		date text not null,
		text text not null,
		user_id integer references users
);

INSERT INTO entries(mood, date, text, user_id)
VALUES ('happy', '2017-01-02T21:57:07.328Z', 'PBR&B blog edison bulb, hot chicken mlkshk banjo you probably haven\'t heard of them lomo listicle keffiyeh flexitarian tacos retro. Vape woke la croix, vexillologist sustainable occupy roof party celiac asymmetrical jianbing microdosing copper mug. Etsy typewriter cronut cray, vexillologist hella ennui ramps af chambray poutine locavore artisan disrupt. Cardigan affogato yuccie lo-fi distillery copper mug. Fam live-edge normcore, thundercats franzen fap single-origin coffee hammock ennui celiac subway tile four dollar toast locavore bespoke synth. Fap hashtag echo park franzen ramps jean shorts. Biodiesel truffaut keffiyeh, tumblr hella schlitz YOLO af wayfarers knausgaard bushwick disrupt.', 1)

INSERT INTO entries(mood, date, text, user_id)
VALUES ('bored', '2017-01-03T21:57:07.328Z', 'Vape chia flannel keffiyeh. Crucifix vaporware ethical slow-carb, snackwave biodiesel polaroid cronut VHS disrupt irony prism. 90's brooklyn vaporware, before they sold out cornhole aesthetic subway tile. Bespoke cred biodiesel aesthetic shabby chic. Pok pok cronut skateboard chia. Coloring book farm-to-table helvetica, butcher pour-over 3 wolf moon you probably haven't heard of them selvage next level lomo banjo. Hammock poutine tumeric, franzen flexitarian retro distillery letterpress flannel woke.', 1)

INSERT INTO entries(mood, date, text, user_id)
VALUES ('apathetic', '2017-01-04T21:57:07.328Z', 'Man braid trust fund viral vegan tumblr, woke bespoke bitters. Keffiyeh ennui marfa trust fund, air plant cornhole godard mlkshk shabby chic kogi iceland ramps tousled mumblecore. Photo booth hoodie polaroid, kogi try-hard XOXO offal hexagon thundercats before they sold out vice artisan pour-over. Air plant church-key locavore jianbing tilde chillwave, 3 wolf moon keytar direct trade poke put a bird on it kitsch. Godard freegan portland, lumbersexual beard VHS chicharrones typewriter four loko. Banjo man bun seitan ethical, polaroid affogato succulents dreamcatcher vegan kale chips. Meditation church-key iceland tumblr, affogato cornhole semiotics four dollar toast kickstarter cardigan selvage.', 1)

INSERT INTO entries(mood, date, text, user_id)
VALUES ('happy', '2017-01-05T21:57:07.328Z', 'Sriracha four loko street art portland, actually williamsburg tattooed VHS. Vice man braid put a bird on it, raw denim meh shoreditch kogi fanny pack pop-up banjo franzen activated charcoal lumbersexual. Helvetica fanny pack fixie vinyl, green juice humblebrag forage. Shabby chic aesthetic hexagon, photo booth fingerstache mixtape literally celiac letterpress chia poutine. Umami cardigan disrupt keytar, tumeric aesthetic food truck activated charcoal plaid venmo blog tacos chartreuse. Taxidermy prism man bun, direct trade williamsburg VHS lumbersexual humblebrag tilde vexillologist four loko quinoa bicycle rights. Edison bulb activated charcoal woke master cleanse semiotics, banh mi shoreditch chambray.', 1)

INSERT INTO entries(mood, date, text, user_id)
VALUES ('sad', '2017-01-06T21:57:07.328Z', 'Biodiesel messenger bag beard chicharrones cardigan. Narwhal chartreuse viral shoreditch. Wolf meggings you probably haven't heard of them, vape schlitz biodiesel lyft cornhole pok pok pabst salvia chicharrones cardigan fap mlkshk. Artisan fingerstache blue bottle, mlkshk pitchfork vape shabby chic kombucha literally taxidermy umami synth live-edge gentrify. Shabby chic food truck tacos, VHS put a bird on it bespoke bitters fanny pack marfa sartorial ugh humblebrag. Ugh vexillologist tacos, waistcoat before they sold out enamel pin keffiyeh plaid 8-bit echo park seitan. Brunch bushwick food truck meditation wolf, pitchfork helvetica twee readymade.', 1)
