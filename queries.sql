select max(BA091_AccDaily), max(BA093_AccDaily), max(BA108_AccDaily), max(KE095_AccDaily), max(KE096_AccDaily), max(ME094_AccDaily), max(ME097_AccDaily), max(ME098_AccDaily), max(ME099_AccDaily), max(ME100_AccDaily), max(ME101_AccDaily), max(ME102_AccDaily), max(ME103_AccDaily), max(ME104_AccDaily), max(ME107_AccDaily), Date(TimeStamp) as the_date from BanderaMasterTable group by the_date order by the_date;

select max(ME002_AccDaily), max(ME003_AccDaily), max(ME005_AccDaily), max(ME006_AccDaily), max(ME007_AccDaily), max(ME008_AccDaily), max(ME009_AccDaily), max(ME010_AccDaily), max(ME011_AccDaily), max(ME015_AccDaily), max(UV012_AccDaily), max(UV013_AccDaily), max(UV014_AccDaily), max(UV016_AccDaily), max(UV017_AccDaily), max(UV018_AccDaily), max(UV019_AccDaily), Date(TimeStamp) as the_date from DHanisMasterTable group by the_date order by the_date;

select max(BE124_AccDaily), max(BE125_AccDaily), max(BE127_AccDaily), max(BE128_AccDaily), max(BE129_AccDaily), max(BE130_AccDaily), max(BE133_AccDaily), max(BE142_AccDaily), max(CO132_AccDaily), max(CO135_AccDaily), max(CO138_AccDaily), max(KE141_AccDaily), Date(TimeStamp) as the_date from GreenMountainMasterTable group by the_date order by the_date;

select max(BL151_AccDaily), max(CO152_AccDaily), max(HA157_AccDaily), max(HA158_AccDaily), max(HA160_AccDaily), max(HA162_AccDaily), max(KE155_AccDaily), Date(TimeStamp) as the_date from KyleMasterTable group by the_date order by the_date;

select max(BA061_AccDaily), max(BA062_AccDaily), max(BA073_AccDaily), max(ED063_AccDaily), max(ED064_AccDaily), max(ED065_AccDaily), max(ED066_AccDaily), max(ED075_AccDaily), max(ED076_AccDaily), max(KE068_AccDaily), max(RE070_AccDaily), max(RE071_AccDaily), max(RE072_AccDaily), max(RE074_AccDaily), Date(TimeStamp) as the_date from SouthForkMasterTable group by the_date order by the_date;

select max(KI040_AccDaily), max(KI041_AccDaily), max(KI043_AccDaily), max(UV031_AccDaily), max(UV032_AccDaily), max(UV033_AccDaily), max(UV034_AccDaily), max(UV035_AccDaily), max(UV036_AccDaily), max(UV037_AccDaily), max(UV039_AccDaily), max(UV042_AccDaily), max(UV044_AccDaily), Date(TimeStamp) as the_date from UvaldeMasterTable group by the_date order by the_date;