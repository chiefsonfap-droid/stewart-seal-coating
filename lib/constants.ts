/**
 * Business Constants and Data Structures
 */

export interface City {
  name: string
  slug: string
  region: string
  regionSlug: string
  climate: string[]
  description: string
  surroundingCommunities?: string
}

export interface Region {
  name: string
  slug: string
  displayName: string
  cities: string[]
  climate: string[]
  description: string
}

// All 87 cities across Ontario
export const CITIES: City[] = [
  // Southwestern Ontario (18 cities)
  {
    name: "London",
    slug: "london",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "clay soil expansion", "water penetration"],
    description: "Regional hub with extensive faith community network",
    surroundingCommunities: "St. Thomas, Strathroy, Parkhill, Ailsa Craig, Dorchester, Thorndale, Delaware, Komoka, Lambeth, Byron, Ilderton, Arva, Lucan, Denfield, Wardsville, Melbourne, Mount Brydges, Glencoe, Newbury"
  },
  {
    name: "Kitchener",
    slug: "kitchener",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "clay soil expansion", "urban drainage"],
    description: "Tech hub with diverse multi-faith communities",
    surroundingCommunities: "Waterloo, Cambridge, Elmira, St. Jacobs, Breslau, New Hamburg, Baden, Petersburg, St. Clements, Wellesley, Linwood, Heidelberg, West Montrose, Conestogo, Bloomingdale, Mannheim"
  },
  {
    name: "Waterloo",
    slug: "waterloo",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "clay soil expansion", "seasonal stress"],
    description: "University city with active worship communities",
    surroundingCommunities: "Kitchener, Cambridge, Elmira, St. Jacobs, Breslau, Woolwich, Conestogo, West Montrose, St. Clements, Heidelberg, Bloomingdale"
  },
  {
    name: "Cambridge",
    slug: "cambridge",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "clay soil expansion", "water penetration"],
    description: "Growing city with diverse worship communities",
    surroundingCommunities: "Kitchener, Waterloo, Guelph, Ayr, Paris, Preston, Hespeler, Blair, Baden, New Hamburg, Glen Morris, Branchton, Sheffield, Galt, Puslinch"
  },
  {
    name: "Guelph",
    slug: "guelph",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "clay soil expansion", "UV damage"],
    description: "Historic university city with active faith communities",
    surroundingCommunities: "Cambridge, Kitchener, Rockwood, Fergus, Elora, Aberfoyle, Morriston, Arkell, Puslinch, Eden Mills, Ariss, Erin, Hillsburgh, Acton, Georgetown, Milton, Campbellville, Limehouse"
  },
  {
    name: "Brantford",
    slug: "brantford",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "moisture damage", "seasonal cracking"],
    description: "Heritage city with established congregations",
    surroundingCommunities: "Paris, St. George, Burford, Mount Pleasant, Scotland, Oakland, Onondaga, Ohsweken, Cainsville, Newport, Middleport, Cathcart, Harley, Burtch, Eagle's Nest, Boston, Jerseyville, Ancaster"
  },
  {
    name: "Stratford",
    slug: "stratford",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "drainage challenges", "subsurface movement"],
    description: "Arts community with active worship traditions",
    surroundingCommunities: "St. Marys, Mitchell, Tavistock, Shakespeare, Milverton, Listowel, Atwood, Monkton, Brunner, Avonton, Fullarton, Downie, Ellice, Gads Hill, Sebringville, Dublin"
  },
  {
    name: "Woodstock",
    slug: "woodstock",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "clay soil movement", "winter damage"],
    description: "Tight-knit community with strong faith presence",
    surroundingCommunities: "Ingersoll, Tillsonburg, Norwich, Beachville, Hickson, Tavistock, Embro, Thamesford, Innerkip, Princeton, Drumbo, Plattsville, Eastwood, Sweaburg, Brownsville"
  },
  {
    name: "St. Thomas",
    slug: "st-thomas",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "clay soil expansion", "moisture damage"],
    description: "Railway city with historic congregations",
    surroundingCommunities: "London, Aylmer, Port Stanley, Sparta, Vienna, Fingal, Belmont, Southwold, Talbotville, Union, Paynes Mills, Shedden, West Lorne, Rodney, Dutton"
  },
  {
    name: "Owen Sound",
    slug: "owen-sound",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["lake effect snow", "freeze-thaw cycles", "Georgian Bay moisture"],
    description: "Bay city with strong community worship",
    surroundingCommunities: "Meaford, Thornbury, Clarksburg, Chatsworth, Markdale, Flesherton, Dundalk, Desboro, Shallow Lake, Annan, Leith, Springmount, Bognor, Balmy Beach, Big Bay, Cape Croker"
  },
  {
    name: "Sarnia",
    slug: "sarnia",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["lake effect", "freeze-thaw cycles", "border-region winters"],
    description: "Border city with industrial heritage and faith communities",
    surroundingCommunities: "Point Edward, Corunna, Brigden, Mooretown, Courtright, Sombra, Port Lambton, Petrolia, Oil Springs, Wyoming, Watford, Forest, Grand Bend, Arkona, Thedford"
  },
  {
    name: "Chatham-Kent",
    slug: "chatham-kent",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["clay soil expansion", "agricultural drainage", "freeze-thaw"],
    description: "Agricultural region with rural and urban congregations",
    surroundingCommunities: "Wallaceburg, Dresden, Ridgetown, Blenheim, Tilbury, Wheatley, Bothwell, Thamesville, Highgate, Merlin, Kent Bridge, Pain Court, Grande Pointe, Dover Centre, Louisville"
  },
  {
    name: "Windsor",
    slug: "windsor",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["urban drainage", "high traffic", "border-region climate"],
    description: "Border city with multicultural faith communities",
    surroundingCommunities: "LaSalle, Tecumseh, Amherstburg, Kingsville, Leamington, Essex, Belle River, St. Clair Beach, Maidstone, Harrow, Comber, McGregor, Oldcastle, Stoney Point, Puce"
  },
  {
    name: "Leamington",
    slug: "leamington",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["agricultural soil", "lake proximity", "seasonal moisture"],
    description: "Greenhouse capital with growing faith communities",
    surroundingCommunities: "Kingsville, Wheatley, Essex, Harrow, Ruthven, Cedar Springs, Cedar Beach, Pelee Island, Comber, North Ridge, South Woodslee, Cottam, Blytheswood, Seacliff"
  },
  {
    name: "Strathroy",
    slug: "strathroy",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["clay soil expansion", "freeze-thaw cycles", "agricultural drainage"],
    description: "Growing town with established congregations",
    surroundingCommunities: "Mount Brydges, Delaware, Komoka, Melbourne, Wardsville, Glencoe, Newbury, Muncey, Caradoc, Adelaide, Glendale, Cairngorm, Longwood"
  },
  {
    name: "Simcoe",
    slug: "simcoe",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["clay soil movement", "freeze-thaw cycles", "rural drainage"],
    description: "County seat with active worship communities",
    surroundingCommunities: "Port Dover, Delhi, Waterford, Tillsonburg, Port Rowan, Turkey Point, Vittoria, Courtland, St. Williams, Villa Nova, La Salette, Langton, Lynedoch, Windham Centre"
  },
  {
    name: "Tillsonburg",
    slug: "tillsonburg",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "agricultural soil", "seasonal stress"],
    description: "Agricultural town with close-knit congregations",
    surroundingCommunities: "Aylmer, Delhi, Port Burwell, Vienna, Straffordville, Springfield, Brownsville, Ostrander, Eden, Culloden, Calton, Corinth, Port Bruce"
  },
  {
    name: "Orangeville",
    slug: "orangeville",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "clay soil expansion", "higher elevation stress"],
    description: "Hills of the Headwaters town with growing faith communities",
    surroundingCommunities: "Shelburne, Grand Valley, Caledon, Mono, Amaranth, Laurel, Whittington, Alton, Erin, Hillsburgh, Belfountain, Terra Cotta, Inglewood, Cheltenham"
  },
  
  // Central Ontario (20 cities)
  {
    name: "Barrie",
    slug: "barrie",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["temperature swings", "seasonal stress", "snow load damage"],
    description: "Growing lakeside city with expanding congregations",
    surroundingCommunities: "Innisfil, Angus, Midhurst, Oro-Medonte, Springwater, Elmvale, Stroud, Shanty Bay, Minesing, Phelpston, Cookstown, Baxter, Holly, Thornton, Everett, Avening, New Lowell"
  },
  {
    name: "Orillia",
    slug: "orillia",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["seasonal stress", "moisture penetration", "winter cracking"],
    description: "Lakeside community with close-knit congregations",
    surroundingCommunities: "Oro-Medonte, Severn, Ramara, Atherley, Hawkestone, Moonstone, Washago, Longford Mills, Warminster, Marchmont, Fesserton, Uhthoff, Waubaushene, Port Severn"
  },
  {
    name: "Peterborough",
    slug: "peterborough",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["temperature swings", "water damage", "freeze-thaw impact"],
    description: "Established city with historic places of worship",
    surroundingCommunities: "Lakefield, Norwood, Keene, Cavan, Millbrook, Bridgenorth, Ennismore, Buckhorn, Curve Lake, Youngs Point, Douro, Warsaw, Bailieboro, Hastings, Havelock"
  },
  {
    name: "Newmarket",
    slug: "newmarket",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["temperature swings", "drainage issues", "seasonal expansion"],
    description: "Fast-growing town with modern faith communities",
    surroundingCommunities: "Aurora, Bradford, East Gwillimbury, Queensville, Sharon, Holland Landing, Mount Albert, Vandorf, Ballantrae, Kettleby, Schomberg, King City, Nobleton"
  },
  {
    name: "Kawartha Lakes",
    slug: "kawartha-lakes",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["seasonal stress", "rural drainage patterns", "frost heaving"],
    description: "Scenic region with rural and town congregations",
    surroundingCommunities: "Lindsay, Bobcaygeon, Fenelon Falls, Woodville, Omemee, Coboconk, Kirkfield, Beaverton, Cambray, Burnt River, Kinmount, Dunsford, Little Britain, Cameron"
  },
  {
    name: "Midland",
    slug: "midland",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["Georgian Bay moisture", "temperature swings", "lake effect snow"],
    description: "Historic waterfront town with strong faith communities",
    surroundingCommunities: "Penetanguishene, Tiny, Victoria Harbour, Coldwater, Waubaushene, Port McNicoll, Perkinsdale, Waverley, Wyevale, Lafontaine, Wyebridge, Hillsdale"
  },
  {
    name: "Collingwood",
    slug: "collingwood",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["lake effect snow", "temperature swings", "seasonal stress"],
    description: "Resort town with year-round worship communities",
    surroundingCommunities: "Wasaga Beach, The Blue Mountains, Thornbury, Clarksburg, Creemore, Stayner, Duntroon, Craigleith, Camperdown, Ravenna, Singhampton, Nottawa"
  },
  {
    name: "Penetanguishene",
    slug: "penetanguishene",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["Georgian Bay moisture", "temperature swings", "winter stress"],
    description: "Bilingual waterfront town with heritage congregations",
    surroundingCommunities: "Midland, Tiny, Lafontaine, Port Severn, Honey Harbour, Waubaushene, Victoria Harbour, Toanche, Wyebridge, Perkinsdale, Thunder Beach"
  },
  {
    name: "Alliston",
    slug: "alliston",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["temperature swings", "seasonal stress", "freeze-thaw cycles"],
    description: "Growing commuter town with active faith communities",
    surroundingCommunities: "Angus, Beeton, Tottenham, Bond Head, Cookstown, Loretto, Rosemont, Everett, Baxter, Colwell, Nicolston, Ivy, Lisle"
  },
  {
    name: "Bradford West Gwillimbury",
    slug: "bradford-west-gwillimbury",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["temperature swings", "seasonal expansion", "drainage challenges"],
    description: "Rapidly growing town with expanding congregations",
    surroundingCommunities: "Newmarket, East Gwillimbury, Holland Landing, Bond Head, Cookstown, Bradford, Schomberg, Gilford, Coulson's Hill, Newton Robinson, Churchill"
  },
  {
    name: "Innisfil",
    slug: "innisfil",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["lake proximity moisture", "temperature swings", "seasonal stress"],
    description: "Lakeside community with growing worship centers",
    surroundingCommunities: "Barrie, Alcona, Stroud, Cookstown, Gilford, Lefroy, Big Bay Point, Belle Ewart, Churchill, Minets Point, Fennells Bay, Sandy Cove"
  },
  {
    name: "Cobourg",
    slug: "cobourg",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["lakefront moisture", "temperature swings", "freeze-thaw cycles"],
    description: "Historic lakeside town with established congregations",
    surroundingCommunities: "Port Hope, Baltimore, Grafton, Bewdley, Harwood, Centreton, Cold Springs, Burnley, Roseneath, Colborne, Castleton, Welcome, Warkworth"
  },
  {
    name: "Port Hope",
    slug: "port-hope",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["lakefront moisture", "seasonal stress", "winter challenges"],
    description: "Heritage town with century-old churches",
    surroundingCommunities: "Cobourg, Newtonville, Wesleyville, Welcome, Canton, Osaca, Perrytown, Garden Hill, Thomasville, Newtonville, Baltimore, Zion"
  },
  {
    name: "Gravenhurst",
    slug: "gravenhurst",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["Muskoka climate", "temperature extremes", "cottage country stress"],
    description: "Gateway to Muskoka with seasonal congregations",
    surroundingCommunities: "Bracebridge, Bala, Port Carling, Torrance, Muskoka Falls, Severn Bridge, Kilworthy, Doe Lake, Glen Orchard, Muskoka Beach, Beaumaris"
  },
  {
    name: "Bracebridge",
    slug: "bracebridge",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["Muskoka climate", "temperature swings", "heavy snow load"],
    description: "Muskoka's heart with year-round faith communities",
    surroundingCommunities: "Gravenhurst, Huntsville, Port Carling, Bala, Windermere, Rosseau, Milford Bay, Baysville, Muskoka Falls, Fraserburg, Beaumaris, Mortimers Point"
  },
  {
    name: "Huntsville",
    slug: "huntsville",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["Muskoka climate", "temperature extremes", "extended winters"],
    description: "Northern resort town with dedicated congregations",
    surroundingCommunities: "Bracebridge, Burks Falls, Dwight, Port Sydney, Fairy Lake, Hidden Valley, Ravenscliffe, Peninsula Lake, Lake of Bays, Utterson, Novar, Allensville"
  },
  {
    name: "Parry Sound",
    slug: "parry-sound",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["Georgian Bay moisture", "temperature extremes", "rocky terrain stress"],
    description: "Georgian Bay town with close-knit worship communities",
    surroundingCommunities: "Nobel, McDougall, Seguin, McKellar, Carling, Pointe au Baril, Byng Inlet, Britt, Still River, Dunchurch, Magnetawan, Kearney, Arnstein"
  },
  {
    name: "Wasaga Beach",
    slug: "wasaga-beach",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["lake effect moisture", "seasonal stress", "sandy soil challenges"],
    description: "Beach community with growing year-round congregations",
    surroundingCommunities: "Collingwood, Stayner, Elmvale, Angus, Clearview, Creemore, New Lowell, Sunnidale, Minesing, Egbert"
  },
  {
    name: "Aurora",
    slug: "aurora",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["temperature swings", "urban drainage", "seasonal expansion"],
    description: "Affluent commuter town with diverse faith communities",
    surroundingCommunities: "Newmarket, Richmond Hill, King City, Oak Ridges, Bloomington, Vandorf, Kettleby, Ballantrae, Stouffville, Whitchurch-Stouffville"
  },
  {
    name: "Uxbridge",
    slug: "uxbridge",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["temperature swings", "rural drainage", "freeze-thaw cycles"],
    description: "Rural town with strong community worship",
    surroundingCommunities: "Stouffville, Goodwood, Udora, Leaskdale, Sandford, Zephyr, Claremont, Port Perry, Sunderland, Cannington, Greenbank, Epsom"
  },
  
  // Golden Horseshoe / Niagara (12 cities)
  {
    name: "Hamilton",
    slug: "hamilton",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["urban drainage", "high traffic volume", "industrial area challenges"],
    description: "Steel city with extensive multi-faith community network",
    surroundingCommunities: "Stoney Creek, Ancaster, Dundas, Waterdown, Flamborough, Binbrook, Glanbrook, Winona, Mount Hope, Greensville, Freelton, Carlisle, Kilbride, Millgrove, Sheffield, Rockton, Westover, Lynden, Copetown"
  },
  {
    name: "St. Catharines",
    slug: "st-catharines",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["high traffic", "urban challenges", "winter salt exposure"],
    description: "Niagara's largest city with established congregations",
    surroundingCommunities: "Niagara Falls, Thorold, Niagara-on-the-Lake, Port Dalhousie, St. Davids, Virgil, Jordan, Vineland, Beamsville, Port Weller, Grantham, Merritton, Queenston"
  },
  {
    name: "Niagara Falls",
    slug: "niagara-falls",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["high traffic volume", "moisture from falls", "tourist-area stress"],
    description: "Tourism hub with active local faith communities",
    surroundingCommunities: "St. Catharines, Fort Erie, Niagara-on-the-Lake, Chippawa, Stamford, Queenston, St. Davids, Thorold, Lundy's Lane, Drummondville, Willoughby"
  },
  {
    name: "Welland",
    slug: "welland",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["urban drainage", "canal proximity moisture", "seasonal stress"],
    description: "Canal city with diverse worship communities",
    surroundingCommunities: "Port Colborne, Thorold, Fonthill, Pelham, Crowland, Port Robinson, Allanburg, Humberstone, Fenwick, Cooks Mills, Wellandport"
  },
  {
    name: "Fort Erie",
    slug: "fort-erie",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["lakefront moisture", "border-region climate", "seasonal stress"],
    description: "Border town with strong community faith presence",
    surroundingCommunities: "Niagara Falls, Port Colborne, Crystal Beach, Ridgeway, Stevensville, Bridgeburg, Ridgemount, Black Creek, Douglastown, Thunder Bay, Bertie, Sherkston"
  },
  {
    name: "Grimsby",
    slug: "grimsby",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["urban drainage", "lakefront moisture", "seasonal wear"],
    description: "Lakeside town with strong community worship",
    surroundingCommunities: "Beamsville, Vineland, Lincoln, St. Catharines, Smithville, Winona, Stoney Creek, Jordan, Campden, Grassie"
  },
  {
    name: "Port Colborne",
    slug: "port-colborne",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["lakefront moisture", "canal proximity", "seasonal challenges"],
    description: "Lakeside industrial town with established congregations",
    surroundingCommunities: "Welland, Fort Erie, Wainfleet, Humberstone, Sherkston, Marshville, Ridgeway, Stevensville, Hagers Corners, Lowbanks"
  },
  {
    name: "Niagara-on-the-Lake",
    slug: "niagara-on-the-lake",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["lakefront moisture", "historic preservation challenges", "seasonal tourism stress"],
    description: "Historic town with heritage worship communities",
    surroundingCommunities: "St. Catharines, Niagara Falls, Virgil, St. Davids, Queenston, Glendale, Four Mile Creek, McNab, Chautauqua"
  },
  {
    name: "Thorold",
    slug: "thorold",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["urban drainage", "canal proximity", "escarpment challenges"],
    description: "Canal city with close-knit congregations",
    surroundingCommunities: "St. Catharines, Welland, Allanburg, Port Robinson, Beaverdams, Fonthill, St. Johns, Power Glen, Decew Falls"
  },
  {
    name: "Pelham",
    slug: "pelham",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["rural drainage", "wine country soil", "seasonal stress"],
    description: "Rural Niagara town with growing faith communities",
    surroundingCommunities: "Fonthill, Welland, Thorold, Fenwick, Ridgeville, North Pelham, St. Anns, Smithville, Effingham, Wellandport"
  },
  {
    name: "Lincoln",
    slug: "lincoln",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["escarpment drainage", "wine country conditions", "seasonal challenges"],
    description: "Wine region with rural and urban congregations",
    surroundingCommunities: "Beamsville, Vineland, Jordan, St. Catharines, Grimsby, Campden, Smithville, Pelham, Rockway, Tintern"
  },
  {
    name: "West Lincoln",
    slug: "west-lincoln",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["rural drainage", "agricultural soil", "seasonal stress"],
    description: "Agricultural township with rural worship communities",
    surroundingCommunities: "Smithville, Grimsby, Caledonia, Binbrook, Caistor Centre, Abingdon, Gainsborough, Bismarck, Wainfleet, Wellandport"
  },
  
  // Eastern Ontario (22 cities)
  {
    name: "Ottawa",
    slug: "ottawa",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["urban drainage", "salt damage", "harsh winters"],
    description: "National capital with extensive multicultural faith communities",
    surroundingCommunities: "Kanata, Nepean, Gloucester, Orleans, Barrhaven, Stittsville, Manotick, Greely, Metcalfe, Osgoode, Richmond, Carp, Munster, Vars, Sarsfield, Navan, Cumberland, North Gower, Kars, Constance Bay"
  },
  {
    name: "Kingston",
    slug: "kingston",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["lakefront moisture", "salt damage from winter maintenance", "freeze-thaw"],
    description: "Historic limestone city with centuries-old congregations",
    surroundingCommunities: "Napanee, Gananoque, Odessa, Bath, Amherstview, Joyceville, Harrowsmith, Sydenham, Seeleys Bay, Verona, Westbrook, Inverary, Portland, Elginburg"
  },
  {
    name: "Cornwall",
    slug: "cornwall",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["lakefront moisture", "salt exposure", "border-region winters"],
    description: "Riverfront city with bilingual faith communities",
    surroundingCommunities: "Long Sault, Ingleside, Morrisburg, Lancaster, Williamstown, Summerstown, Glen Walter, Martintown, Apple Hill, St. Andrews West, Newington, Northfield, Lunenburg"
  },
  {
    name: "Belleville",
    slug: "belleville",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["lakefront moisture", "salt damage", "drainage challenges"],
    description: "Bay of Quinte hub with diverse worship communities",
    surroundingCommunities: "Trenton, Quinte West, Stirling, Tweed, Foxboro, Roslin, Cannifton, Corbyville, Frankford, Batawa, Marysville, Wallbridge, Rednersville, Consecon, Carrying Place"
  },
  {
    name: "Brockville",
    slug: "brockville",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["lakefront moisture", "salt damage", "waterfront exposure"],
    description: "Thousand Islands gateway with heritage churches",
    surroundingCommunities: "Prescott, Gananoque, Maitland, Mallorytown, Athens, Lyn, Addison, Rockport, Lansdowne, Elizabethtown, Tincap, Frankville, Toledo"
  },
  {
    name: "Pembroke",
    slug: "pembroke",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["salt damage", "river moisture", "rural freeze-thaw"],
    description: "Ottawa Valley center with close-knit congregations",
    surroundingCommunities: "Petawawa, Cobden, Beachburg, Westmeath, Renfrew, Eganville, Douglas, Chalk River, Deep River, Laurentian Hills, Golden Lake, Killaloe, Wilno, Barry's Bay"
  },
  {
    name: "Petawawa",
    slug: "petawawa",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["Ottawa Valley winters", "river moisture", "military base challenges"],
    description: "Military town with transient and permanent congregations",
    surroundingCommunities: "Pembroke, Chalk River, Deep River, Laurentian Hills, Cobden, Beachburg, Eganville, Douglas, Golden Lake, Westmeath, Alice, Driftwood, Rollway"
  },
  {
    name: "Smiths Falls",
    slug: "smiths-falls",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["canal proximity moisture", "freeze-thaw cycles", "rural drainage"],
    description: "Historic canal town with established worship communities",
    surroundingCommunities: "Perth, Merrickville, Kemptville, Carleton Place, Westport, Portland, Rideau Ferry, Chaffeys Lock, Crosby, Lombardy, Elgin, Forfar, Scotch Corners"
  },
  {
    name: "Trenton",
    slug: "trenton",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["lakefront moisture", "military base activity", "seasonal stress"],
    description: "Military hub with diverse faith communities",
    surroundingCommunities: "Belleville, Brighton, Frankford, Batawa, Consecon, Carrying Place, Wooler, Rednersville, Murray, Marysville, Foxboro, Bayside, Deseronto"
  },
  {
    name: "Napanee",
    slug: "napanee",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["lakefront proximity", "freeze-thaw cycles", "limestone soil challenges"],
    description: "Industrial town with established congregations",
    surroundingCommunities: "Kingston, Greater Napanee, Odessa, Bath, Amherstview, Newburgh, Camden East, Yarker, Colebrook, Selby, Morven, Erinsville, Roblin"
  },
  {
    name: "Perth",
    slug: "perth",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["rural freeze-thaw", "canal proximity", "heritage preservation needs"],
    description: "Historic stone town with century-old churches",
    surroundingCommunities: "Smiths Falls, Lanark, Carleton Place, Maberly, Balderson, Rideau Ferry, Christie Lake, Port Elm, Innisville, Fallbrook, Scotch Line, Bathurst"
  },
  {
    name: "Arnprior",
    slug: "arnprior",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["Ottawa Valley winters", "river moisture", "rural drainage"],
    description: "Ottawa River town with close-knit congregations",
    surroundingCommunities: "Renfrew, Braeside, Sand Point, Fitzroy Harbour, Kinburn, Pakenham, Antrim, White Lake, Burnstown, Douglas, Calabogie, Corkery"
  },
  {
    name: "Carleton Place",
    slug: "carleton-place",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["Mississippi River moisture", "freeze-thaw cycles", "commuter town stress"],
    description: "Growing commuter town with expanding faith communities",
    surroundingCommunities: "Almonte, Smiths Falls, Perth, Pakenham, Ashton, Munster, Richmond, Kanata, Stittsville, Carp, Kinburn, Lanark, Balderson, Blakeney"
  },
  {
    name: "Renfrew",
    slug: "renfrew",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["Ottawa Valley winters", "river moisture", "rural freeze-thaw"],
    description: "Valley town with strong community worship",
    surroundingCommunities: "Arnprior, Pembroke, Eganville, Douglas, Cobden, Beachburg, Dacre, Ferguslea, Calabogie, Burnstown, White Lake, Killaloe, Golden Lake"
  },
  {
    name: "Gananoque",
    slug: "gananoque",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["St. Lawrence moisture", "Thousand Islands climate", "tourism seasonality"],
    description: "Gateway to 1000 Islands with seasonal congregations",
    surroundingCommunities: "Kingston, Brockville, Lansdowne, Ivy Lea, Rockport, Mallorytown, Escott, Lyndhurst, Seeleys Bay, Athens, Delta, Toledo, Elgin"
  },
  {
    name: "Kemptville",
    slug: "kemptville",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["rural drainage", "freeze-thaw cycles", "agricultural soil"],
    description: "Agricultural town with growing faith communities",
    surroundingCommunities: "Merrickville, Smiths Falls, Ottawa, Greely, Osgoode, Metcalfe, North Gower, Spencerville, Oxford Mills, Bishops Mills, Burritts Rapids, Bedell"
  },
  {
    name: "Almonte",
    slug: "almonte",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["Mississippi River moisture", "heritage building challenges", "rural drainage"],
    description: "Arts town with heritage worship communities",
    surroundingCommunities: "Carleton Place, Perth, Pakenham, Appleton, Clayton, Ramsay, Lanark, Mississippi Station, Innisville, Blakeney, White Lake, Ompah"
  },
  {
    name: "Prescott",
    slug: "prescott",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["St. Lawrence moisture", "border-region winters", "waterfront exposure"],
    description: "Historic waterfront town with established congregations",
    surroundingCommunities: "Brockville, Cardinal, Johnstown, Maitland, Spencerville, Hyndman, Heckston, Lyn, Mallorytown, Pittston, Maynard"
  },
  {
    name: "Rockland",
    slug: "rockland",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["Ottawa proximity", "bilingual community needs", "freeze-thaw cycles"],
    description: "Bilingual commuter town with Franco-Ontarian faith heritage",
    surroundingCommunities: "Clarence Creek, Hammond, Bourget, Lefaivre, St. Pascal Baylon, Cheney, Vars, Navan, Cumberland, Orleans, Wendover, St. Isidore"
  },
  {
    name: "Hawkesbury",
    slug: "hawkesbury",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["Ottawa River moisture", "border-region climate", "bilingual community"],
    description: "Bilingual mill town with strong Catholic and Protestant presence",
    surroundingCommunities: "Vankleek Hill, St. Eugene, L'Orignal, Grenville, St. Bernardin, Dalkeith, Glen Robertson, St. Anne de Prescott, Plantagenet, Alfred, Casselman"
  },
  {
    name: "Alexandria",
    slug: "alexandria",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["rural drainage", "freeze-thaw cycles", "Glengarry County climate"],
    description: "Glengarry town with Gaelic heritage and faith communities",
    surroundingCommunities: "Maxville, Glen Robertson, Dalkeith, Greenfield, Apple Hill, Martintown, Lancaster, Williamstown, Glen Roy, Lochiel, McCrimmon, Dunvegan"
  },
  {
    name: "Casselman",
    slug: "casselman",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["rural drainage", "bilingual community", "freeze-thaw cycles"],
    description: "Bilingual village with Franco-Ontarian congregations",
    surroundingCommunities: "Rockland, Embrun, Limoges, Russell, Metcalfe, Vars, Bourget, St. Pascal Baylon, Crysler, St. Albert, St. Isidore, Wendover"
  },
  
  // Northern Ontario (15 cities)
  {
    name: "Greater Sudbury",
    slug: "greater-sudbury",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "severe temperature swings", "heavy snow load"],
    description: "Mining capital with multi-cultural faith communities",
    surroundingCommunities: "Val Caron, Azilda, Chelmsford, Lively, Garson, Coniston, Dowling, Onaping Falls, Levack, Wahnapitae, Copper Cliff, Val Therese, Hanmer, Capreol, Blezard Valley"
  },
  {
    name: "Sault Ste. Marie",
    slug: "sault-ste-marie",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "lake effect snow", "extreme cold"],
    description: "Border city with strong multicultural worship presence",
    surroundingCommunities: "Wawa, Blind River, Elliot Lake, Bruce Mines, Desbarats, Batchawana Bay, Goulais River, Echo Bay, Searchmont, Garden River, Bar River, Thessalon, Iron Bridge"
  },
  {
    name: "North Bay",
    slug: "north-bay",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "severe temperature swings", "harsh conditions"],
    description: "Gateway to the North with resilient congregations",
    surroundingCommunities: "Sturgeon Falls, Powassan, Callander, Astorville, Bonfield, Corbeil, Temagami, Cache Bay, Verner, Redbridge, Lavigne, Trout Creek, South River, Sundridge"
  },
  {
    name: "Thunder Bay",
    slug: "thunder-bay",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "severe temperature swings", "heavy snow accumulation"],
    description: "Northwestern Ontario's largest city with diverse faiths",
    surroundingCommunities: "Fort William, Port Arthur, Nipigon, Shuniah, Oliver Paipoonge, Kakabeka Falls, Murillo, Pass Lake, MacKenzie, Rosslyn, Neebing, Red Rock, Dorion, Terrace Bay"
  },
  {
    name: "Timmins",
    slug: "timmins",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "extreme cold", "remote climate challenges"],
    description: "Resource town with dedicated faith communities",
    surroundingCommunities: "Porcupine, South Porcupine, Schumacher, Iroquois Falls, Cochrane, Matheson, Val Gagne, Monteith, Nellie Lake, Porcupine Lake, Kamiskotia, Hoyle, Mountjoy"
  },
  {
    name: "Temiskaming Shores",
    slug: "temiskaming-shores",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "lake proximity", "extreme temperature swings"],
    description: "Northern lakeside city with close-knit congregations",
    surroundingCommunities: "Haileybury, New Liskeard, Dymond, Thornloe, Earlton, Englehart, Charlton, Tomstown, Kenabeek, North Cobalt, Armstrong, Hilliardton, Harris, Uno Park"
  },
  {
    name: "Elliot Lake",
    slug: "elliot-lake",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "Canadian Shield challenges", "remote conditions"],
    description: "Retirement and resource town with aging congregations",
    surroundingCommunities: "Blind River, Serpent River, Spragge, Iron Bridge, Thessalon, Bruce Mines, Spanish, Massey, Webbwood, Walford, Dean Lake, Dunlop"
  },
  {
    name: "Kapuskasing",
    slug: "kapuskasing",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "extreme cold", "remote climate extremes"],
    description: "Northern mill town with dedicated faith communities",
    surroundingCommunities: "Hearst, Smooth Rock Falls, Val Rita, Opasatika, Moonbeam, Fauquier, Jogues, Remi Lake, Timmins, Cochrane, Foleyet, Shining Tree, Gogama"
  },
  {
    name: "Kirkland Lake",
    slug: "kirkland-lake",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "mining region challenges", "extreme cold"],
    description: "Historic mining town with heritage churches",
    surroundingCommunities: "Larder Lake, Virginiatown, McGarry, Swastika, Chaput Hughes, Earlton, Englehart, Charlton, Dane, Gauthier, Kearns, McVittie, Pacaud"
  },
  {
    name: "Espanola",
    slug: "espanola",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "Spanish River moisture", "heavy snow load"],
    description: "Mill town with strong community worship",
    surroundingCommunities: "Massey, Webbwood, Spanish, Nairn Centre, Walford, Willisville, McKerrow, Birch Island, Little Current, Whitefish Falls, Kagawong, Gore Bay, Manitowaning"
  },
  {
    name: "Cochrane",
    slug: "cochrane",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "extreme cold", "Polar Bear Express route"],
    description: "Gateway to James Bay with resilient congregations",
    surroundingCommunities: "Timmins, Kapuskasing, Smooth Rock Falls, Moonbeam, Moosonee, Moose Factory, Hearst, Iroquois Falls, Matheson, Val Rita, Fauquier, Jogues"
  },
  {
    name: "Hearst",
    slug: "hearst",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "extreme cold", "Franco-Ontarian climate"],
    description: "Franco-Ontarian town with bilingual faith communities",
    surroundingCommunities: "Kapuskasing, Smooth Rock Falls, Mattice, Val Cote, Coppell, Jogues, Constance Lake, Oba, Hornepayne, White River, Nakina, Geraldton"
  },
  {
    name: "Iroquois Falls",
    slug: "iroquois-falls",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "mill town conditions", "heavy snow"],
    description: "Paper mill town with dedicated congregations",
    surroundingCommunities: "Timmins, Cochrane, Matheson, Monteith, Porquis Junction, Ansonville, Nellie Lake, Val Gagne, Frederick House, Ramore, Driftwood, Dugwal"
  },
  {
    name: "Blind River",
    slug: "blind-river",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "North Channel moisture", "Canadian Shield"],
    description: "North Shore town with close-knit worship communities",
    surroundingCommunities: "Elliot Lake, Thessalon, Spanish, Bruce Mines, Spragge, Iron Bridge, Serpent River, Algoma Mills, Cutler, Spanish River, Dunlop, Dean Lake"
  },
  {
    name: "Chapleau",
    slug: "chapleau",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "extreme cold", "remote wilderness conditions"],
    description: "Remote railway town with resilient faith communities",
    surroundingCommunities: "Wawa, White River, Hornepayne, Foleyet, Biscotasing, Sultan, Ramsey, Metagama, Benny, Westree, Franz, Nemegos, Dalton"
  },
]

// 5 regions with comprehensive city lists
export const REGIONS: Region[] = [
  {
    name: "Southwestern Ontario",
    slug: "southwestern-ontario",
    displayName: "Southwestern Ontario",
    cities: ["London", "Kitchener", "Waterloo", "Cambridge", "Guelph", "Brantford", "Windsor", "Sarnia", "Chatham-Kent", "Stratford", "Woodstock", "St. Thomas", "Owen Sound", "Leamington", "Strathroy", "Simcoe", "Tillsonburg", "Orangeville"],
    climate: ["freeze-thaw cycles", "clay soil expansion", "seasonal moisture"],
    description: "Agricultural heartland with historic communities and modern growth"
  },
  {
    name: "Central Ontario",
    slug: "central-ontario",
    displayName: "Central Ontario",
    cities: ["Barrie", "Orillia", "Peterborough", "Newmarket", "Kawartha Lakes", "Midland", "Collingwood", "Penetanguishene", "Alliston", "Bradford West Gwillimbury", "Innisfil", "Cobourg", "Port Hope", "Gravenhurst", "Bracebridge", "Huntsville", "Parry Sound", "Wasaga Beach", "Aurora", "Uxbridge"],
    climate: ["temperature swings", "seasonal stress", "lake effect patterns"],
    description: "Cottage country and commuter communities north of the GTA"
  },
  {
    name: "Golden Horseshoe / Niagara",
    slug: "golden-horseshoe-niagara",
    displayName: "Golden Horseshoe / Niagara",
    cities: ["Hamilton", "St. Catharines", "Niagara Falls", "Welland", "Fort Erie", "Grimsby", "Port Colborne", "Niagara-on-the-Lake", "Thorold", "Pelham", "Lincoln", "West Lincoln"],
    climate: ["high traffic volume", "urban drainage challenges", "salt damage"],
    description: "Ontario's most densely populated region with diverse communities"
  },
  {
    name: "Eastern Ontario",
    slug: "eastern-ontario",
    displayName: "Eastern Ontario",
    cities: ["Ottawa", "Kingston", "Cornwall", "Belleville", "Brockville", "Pembroke", "Petawawa", "Smiths Falls", "Trenton", "Napanee", "Perth", "Arnprior", "Carleton Place", "Renfrew", "Gananoque", "Kemptville", "Almonte", "Prescott", "Rockland", "Hawkesbury", "Alexandria", "Casselman"],
    climate: ["lakefront moisture", "salt damage from winter maintenance", "freeze-thaw"],
    description: "Historic region along the St. Lawrence and Ottawa rivers"
  },
  {
    name: "Northern Ontario",
    slug: "northern-ontario",
    displayName: "Northern Ontario",
    cities: ["Greater Sudbury", "Sault Ste. Marie", "North Bay", "Thunder Bay", "Timmins", "Temiskaming Shores", "Elliot Lake", "Kapuskasing", "Kirkland Lake", "Espanola", "Cochrane", "Hearst", "Iroquois Falls", "Blind River", "Chapleau"],
    climate: ["extended winters", "severe temperature swings", "heavy snow load"],
    description: "Vast resource-based region with resilient communities"
  },
]

// Helper functions
export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find(city => city.slug === slug)
}

export function getRegionBySlug(slug: string): Region | undefined {
  return REGIONS.find(region => region.slug === slug)
}

export function getCitiesByRegion(regionSlug: string): City[] {
  return CITIES.filter(city => city.regionSlug === regionSlug)
}

// Contact information
export const CONTACT = {
  phone: process.env.NEXT_PUBLIC_PHONE || "(555) 123-4567",
  email: process.env.NEXT_PUBLIC_EMAIL || "info@stewardsealcoating.com",
  address: process.env.NEXT_PUBLIC_ADDRESS || "Ontario, Canada",
}

// Founding Communities Program
export const FOUNDING_PROGRAM = {
  totalSpots: 50,
  currentCount: parseInt(process.env.NEXT_PUBLIC_FOUNDING_COUNT || "12"),
  get spotsRemaining() {
    return this.totalSpots - this.currentCount
  },
  get isClosed() {
    return this.spotsRemaining <= 0
  }
}

