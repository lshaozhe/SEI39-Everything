Last login: Mon Aug 29 15:31:25 on ttys001
ymw@Waynes-MacBook-Pro ~ % pwd
/Users/ymw
ymw@Waynes-MacBook-Pro ~ % cd Desktop 
ymw@Waynes-MacBook-Pro Desktop % mkdir galaxy_far_far_away
ymw@Waynes-MacBook-Pro Desktop % ls
Batcave
GA-Blog
Screenshot 2022-08-11 at 4.52.13 PM.png
Screenshot 2022-08-18 at 1.48.19 PM.png
Screenshot 2022-08-25 at 11.38.09 AM.png
Screenshot 2022-08-27 at 11.26.14 AM.png
TFB
first_homework
galaxy_far_far_away
sei-39
ymw@Waynes-MacBook-Pro Desktop % cd galaxy_far_far_away 
ymw@Waynes-MacBook-Pro galaxy_far_far_away % mkdir death_star
ymw@Waynes-MacBook-Pro galaxy_far_far_away % cd death_star 
ymw@Waynes-MacBook-Pro death_star % touch darth_vader.txt princess_leia.txt storm_trooper.txt
ymw@Waynes-MacBook-Pro death_star % ls
darth_vader.txt		princess_leia.txt	storm_trooper.txt
ymw@Waynes-MacBook-Pro death_star % cd ..
ymw@Waynes-MacBook-Pro galaxy_far_far_away % mkdir tatooine
ymw@Waynes-MacBook-Pro galaxy_far_far_away % cd tatooine 
ymw@Waynes-MacBook-Pro tatooine % touch luke.txt ben_kenobi.txt
ymw@Waynes-MacBook-Pro tatooine % ls
ben_kenobi.txt	luke.txt
ymw@Waynes-MacBook-Pro tatooine % mkdir millenium_falcon
ymw@Waynes-MacBook-Pro tatooine % cd millenium_falcon 
ymw@Waynes-MacBook-Pro millenium_falcon % touch han_solo.txt chewbaca.txt
ymw@Waynes-MacBook-Pro millenium_falcon % ls
chewbaca.txt	han_solo.txt
ymw@Waynes-MacBook-Pro millenium_falcon % ls
chewbaca.txt	han_solo.txt
ymw@Waynes-MacBook-Pro millenium_falcon % cd ..
ymw@Waynes-MacBook-Pro tatooine % ls
ben_kenobi.txt		luke.txt		millenium_falcon
ymw@Waynes-MacBook-Pro tatooine % mv ben_kenobi.txt obi_wan.txt
ymw@Waynes-MacBook-Pro tatooine % ls
luke.txt		millenium_falcon	obi_wan.txt
ymw@Waynes-MacBook-Pro tatooine % cd ..
ymw@Waynes-MacBook-Pro galaxy_far_far_away % ls
death_star	tatooine
ymw@Waynes-MacBook-Pro galaxy_far_far_away % cd death_star 
ymw@Waynes-MacBook-Pro death_star % ls
darth_vader.txt		princess_leia.txt	storm_trooper.txt
ymw@Waynes-MacBook-Pro death_star % cp storm_trooper.txt ../tatooine 
ymw@Waynes-MacBook-Pro death_star % ls
darth_vader.txt		princess_leia.txt	storm_trooper.txt
ymw@Waynes-MacBook-Pro death_star % cd ..
ymw@Waynes-MacBook-Pro galaxy_far_far_away % cd tatooine 
ymw@Waynes-MacBook-Pro tatooine % ls
luke.txt		obi_wan.txt
millenium_falcon	storm_trooper.txt
ymw@Waynes-MacBook-Pro tatooine % mv luke.txt millenium_falcon
ymw@Waynes-MacBook-Pro tatooine % ls
millenium_falcon	obi_wan.txt		storm_trooper.txt
ymw@Waynes-MacBook-Pro tatooine % mv obi_wan.txt millenium_falcon
ymw@Waynes-MacBook-Pro tatooine % ls
millenium_falcon	storm_trooper.txt
ymw@Waynes-MacBook-Pro tatooine % mv millenium_falcon ..
ymw@Waynes-MacBook-Pro tatooine % ls
storm_trooper.txt
ymw@Waynes-MacBook-Pro tatooine % cd ..
ymw@Waynes-MacBook-Pro galaxy_far_far_away % ls
death_star		millenium_falcon	tatooine
ymw@Waynes-MacBook-Pro galaxy_far_far_away % mv millenium_falcon death_star
ymw@Waynes-MacBook-Pro galaxy_far_far_away % ls
death_star	tatooine
ymw@Waynes-MacBook-Pro galaxy_far_far_away % cd death_star 
ymw@Waynes-MacBook-Pro death_star % ls                      
darth_vader.txt		princess_leia.txt
millenium_falcon	storm_trooper.txt
ymw@Waynes-MacBook-Pro death_star % mv princess_leia.txt millenium_falcon
ymw@Waynes-MacBook-Pro death_star % ls
darth_vader.txt		millenium_falcon	storm_trooper.txt
ymw@Waynes-MacBook-Pro death_star % cd millenium_falcon
ymw@Waynes-MacBook-Pro millenium_falcon % ls
chewbaca.txt		luke.txt		princess_leia.txt
han_solo.txt		obi_wan.txt
ymw@Waynes-MacBook-Pro millenium_falcon % rm obi_wan.txt
ymw@Waynes-MacBook-Pro millenium_falcon % ls
chewbaca.txt		luke.txt
han_solo.txt		princess_leia.txt
ymw@Waynes-MacBook-Pro millenium_falcon % cd ..
ymw@Waynes-MacBook-Pro death_star % cd ..
ymw@Waynes-MacBook-Pro galaxy_far_far_away % mkdir yavin_4
ymw@Waynes-MacBook-Pro galaxy_far_far_away % cd death_star 
ymw@Waynes-MacBook-Pro death_star % mv millenium_falcon ../yavin_4
ymw@Waynes-MacBook-Pro death_star % cd ..
ymw@Waynes-MacBook-Pro galaxy_far_far_away % cd yavin_4 
ymw@Waynes-MacBook-Pro yavin_4 % mkdir x_wing
ymw@Waynes-MacBook-Pro yavin_4 % mv millenium_falcon/princess_leia.txt ..
ymw@Waynes-MacBook-Pro yavin_4 % cd ..
ymw@Waynes-MacBook-Pro galaxy_far_far_away % mv princess_leia.txt yavin_4
ymw@Waynes-MacBook-Pro galaxy_far_far_away % cd yavin_4 
ymw@Waynes-MacBook-Pro yavin_4 % mv millenium_falcon/luke.txt x_wing
ymw@Waynes-MacBook-Pro yavin_4 % mv millenium_falcon x_wing ..
ymw@Waynes-MacBook-Pro yavin_4 % cd ..
ymw@Waynes-MacBook-Pro galaxy_far_far_away % cd death_star 
ymw@Waynes-MacBook-Pro death_star % mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
ymw@Waynes-MacBook-Pro death_star % mv darth_vader.txt tie_fighter_1
ymw@Waynes-MacBook-Pro death_star % cp storm_trooper.txt tie_fighter_2 tie_fighter_3
cp: tie_fighter_2 is a directory (not copied).
ymw@Waynes-MacBook-Pro death_star % cp stormer_trooper.txt tie_fighter_2
cp: stormer_trooper.txt: No such file or directory
ymw@Waynes-MacBook-Pro death_star % cp storm_trooper.txt tie_fighter_2 
ymw@Waynes-MacBook-Pro death_star % mv tie_fighter_1 ..
ymw@Waynes-MacBook-Pro death_star % mv tie_fighter_2 ..
ymw@Waynes-MacBook-Pro death_star % mv tie_fighter_3 ..
ymw@Waynes-MacBook-Pro death_star % cd ..
ymw@Waynes-MacBook-Pro galaxy_far_far_away % rm -r tie_fighter_2
ymw@Waynes-MacBook-Pro galaxy_far_far_away % rm -r tie_fighter_3
ymw@Waynes-MacBook-Pro galaxy_far_far_away % cd x_wing 
ymw@Waynes-MacBook-Pro x_wing % touch the_force.txt
ymw@Waynes-MacBook-Pro x_wing % cd ..
ymw@Waynes-MacBook-Pro galaxy_far_far_away % ls
death_star		tatooine		x_wing
millenium_falcon	tie_fighter_1		yavin_4
ymw@Waynes-MacBook-Pro galaxy_far_far_away % rm -r death_star
ymw@Waynes-MacBook-Pro galaxy_far_far_away % ls
millenium_falcon	tie_fighter_1		yavin_4
tatooine		x_wing
ymw@Waynes-MacBook-Pro galaxy_far_far_away % mv millenium_falcon yavin_4
ymw@Waynes-MacBook-Pro galaxy_far_far_away % ls
tatooine	tie_fighter_1	x_wing		yavin_4
ymw@Waynes-MacBook-Pro galaxy_far_far_away % mv x_wing yavin_4 
ymw@Waynes-MacBook-Pro galaxy_far_far_away % ls
tatooine	tie_fighter_1	yavin_4
ymw@Waynes-MacBook-Pro galaxy_far_far_away % 
