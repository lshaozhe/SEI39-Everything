Last login: Mon Aug 29 16:45:42 on ttys000
ssn@Shawns-MacBook-Pro ~ % ls
Applications	Documents	Library		Music		Public
Desktop		Downloads	Movies		Pictures
ssn@Shawns-MacBook-Pro ~ % cd Desktop 
ssn@Shawns-MacBook-Pro Desktop % mkdir galaxy_far_far_away
ssn@Shawns-MacBook-Pro Desktop % cd galaxy_far_far_away 
ssn@Shawns-MacBook-Pro galaxy_far_far_away % mkdir death_star 
ssn@Shawns-MacBook-Pro galaxy_far_far_away % cd death_star 
ssn@Shawns-MacBook-Pro death_star % touch darth_vader.txt princess_leia.txt storm_trooper.txt
ssn@Shawns-MacBook-Pro death_star % ls
darth_vader.txt		princess_leia.txt	storm_trooper.txt
ssn@Shawns-MacBook-Pro death_star % cd ..   
ssn@Shawns-MacBook-Pro galaxy_far_far_away % mkdir tatooine
ssn@Shawns-MacBook-Pro galaxy_far_far_away % cd tatooine 
ssn@Shawns-MacBook-Pro tatooine % touch luke.txt ben_kenobi.txt 
ssn@Shawns-MacBook-Pro tatooine % ;s
zsh: command not found: s
ssn@Shawns-MacBook-Pro tatooine % ls
ben_kenobi.txt	luke.txt
ssn@Shawns-MacBook-Pro tatooine % mkdir millenium_falcon
ssn@Shawns-MacBook-Pro tatooine % cd millenium_falcon 
ssn@Shawns-MacBook-Pro millenium_falcon % touch han_solo.txt chewbaca.txt
ssn@Shawns-MacBook-Pro millenium_falcon % ls
chewbaca.txt	han_solo.txt
ssn@Shawns-MacBook-Pro millenium_falcon % cd ..
ssn@Shawns-MacBook-Pro tatooine % ls
ben_kenobi.txt		luke.txt		millenium_falcon
ssn@Shawns-MacBook-Pro tatooine % mv ben_kenobi.txt obi_wan.txt
ssn@Shawns-MacBook-Pro tatooine % ls
luke.txt		millenium_falcon	obi_wan.txt
ssn@Shawns-MacBook-Pro tatooine % cd ..
ssn@Shawns-MacBook-Pro galaxy_far_far_away % cd death_star 
ssn@Shawns-MacBook-Pro death_star % cp storm_trooper.txt ../tatooine
ssn@Shawns-MacBook-Pro death_star % ls
darth_vader.txt		princess_leia.txt	storm_trooper.txt
ssn@Shawns-MacBook-Pro death_star % cd ..
ssn@Shawns-MacBook-Pro galaxy_far_far_away % cd tatooine 
ssn@Shawns-MacBook-Pro tatooine % ls 
luke.txt		obi_wan.txt
millenium_falcon	storm_trooper.txt
ssn@Shawns-MacBook-Pro tatooine % mv luke.txt  millenium_falcon
ssn@Shawns-MacBook-Pro tatooine % ls
millenium_falcon	obi_wan.txt		storm_trooper.txt
ssn@Shawns-MacBook-Pro tatooine % mv obi_wan.txt millenium_falcon
ssn@Shawns-MacBook-Pro tatooine % ls
millenium_falcon	storm_trooper.txt
ssn@Shawns-MacBook-Pro tatooine % mv millenium_falcon ..
ssn@Shawns-MacBook-Pro tatooine % ls
storm_trooper.txt
ssn@Shawns-MacBook-Pro tatooine % cd ..
ssn@Shawns-MacBook-Pro galaxy_far_far_away % ls
death_star		millenium_falcon	tatooine
ssn@Shawns-MacBook-Pro galaxy_far_far_away % mv millenium_falcon death_star
ssn@Shawns-MacBook-Pro galaxy_far_far_away % ls
death_star	tatooine
ssn@Shawns-MacBook-Pro galaxy_far_far_away % cd death_star 
ssn@Shawns-MacBook-Pro death_star % mv princess_leia.txt millenium_falcon
ssn@Shawns-MacBook-Pro death_star % ls
darth_vader.txt		millenium_falcon	storm_trooper.txt
ssn@Shawns-MacBook-Pro death_star % cd millenium_falcon 
ssn@Shawns-MacBook-Pro millenium_falcon % rm obi_wan.txt
ssn@Shawns-MacBook-Pro millenium_falcon % ls
chewbaca.txt		luke.txt
han_solo.txt		princess_leia.txt
ssn@Shawns-MacBook-Pro millenium_falcon % cd ..
ssn@Shawns-MacBook-Pro death_star % cd ..
ssn@Shawns-MacBook-Pro galaxy_far_far_away % mkdir yavin_4
ssn@Shawns-MacBook-Pro galaxy_far_far_away % cd death_star 
ssn@Shawns-MacBook-Pro death_star % mv millenium_falcon ../yavin_4
ssn@Shawns-MacBook-Pro death_star % cd ..
ssn@Shawns-MacBook-Pro galaxy_far_far_away % cd yavin_4 
ssn@Shawns-MacBook-Pro yavin_4 % mkdir x_wing
ssn@Shawns-MacBook-Pro yavin_4 % ls
millenium_falcon	x_wing
ssn@Shawns-MacBook-Pro yavin_4 % mv millenium_falcon/princess_leia.txt 
usage: mv [-f | -i | -n] [-hv] source target
       mv [-f | -i | -n] [-v] source ... directory
ssn@Shawns-MacBook-Pro yavin_4 % cd millenium_falcon 
ssn@Shawns-MacBook-Pro millenium_falcon % mv princess_leia.txt .. 
ssn@Shawns-MacBook-Pro millenium_falcon % mv luke.txt ../x_wing
ssn@Shawns-MacBook-Pro millenium_falcon % cd ..
ssn@Shawns-MacBook-Pro yavin_4 % mv millenium_falcon x_wing ..
ssn@Shawns-MacBook-Pro yavin_4 % cd .. 
ssn@Shawns-MacBook-Pro galaxy_far_far_away % cd death_star 
ssn@Shawns-MacBook-Pro death_star % mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
ssn@Shawns-MacBook-Pro death_star % mv darth_vader.txt tie_fighter_1
ssn@Shawns-MacBook-Pro death_star % cp storm_trooper.txt tie_fighter_2
ssn@Shawns-MacBook-Pro death_star % cp storm_trooper.txt tie_fighter_3
ssn@Shawns-MacBook-Pro death_star % mv tie_fighter_1 ../          
ssn@Shawns-MacBook-Pro death_star % mv tie_fighter_2 ../
ssn@Shawns-MacBook-Pro death_star % mv tie_fighter_3 ../
ssn@Shawns-MacBook-Pro death_star % cd ..           
ssn@Shawns-MacBook-Pro galaxy_far_far_away % rm tie_fighter_2
rm: tie_fighter_2: is a directory
ssn@Shawns-MacBook-Pro galaxy_far_far_away % rm -r tie_fighter_2
ssn@Shawns-MacBook-Pro galaxy_far_far_away % rm -r tie_fighter_3
ssn@Shawns-MacBook-Pro galaxy_far_far_away % cd x_wing 
ssn@Shawns-MacBook-Pro x_wing % touch the_force.txt
ssn@Shawns-MacBook-Pro x_wing % cd ..
ssn@Shawns-MacBook-Pro galaxy_far_far_away % rm -r death_star
ssn@Shawns-MacBook-Pro galaxy_far_far_away % mv x_wing yavin_4
ssn@Shawns-MacBook-Pro galaxy_far_far_away % mv millenium_falcon yavin_4
ssn@Shawns-MacBook-Pro galaxy_far_far_away % 
