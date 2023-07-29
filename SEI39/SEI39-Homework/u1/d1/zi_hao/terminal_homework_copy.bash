# Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt

# Open the **Terminal app**

# Create a new directory on your desktop called `galaxy_far_far_away`and enter it
gx@Macbook-Water Desktop % mkdir galaxy_far_far_away
gx@Macbook-Water Desktop % cd galaxy_far_far_away
# Create a directory called `death_star`
gx@Macbook-Water galaxy_far_far_away % mkdir death_star
# and make the following files inside of it:
# darth_vader.txt
# princess_leia.txt
# storm_trooper.txt
gx@Macbook-Water galaxy_far_far_away % cd death_star
gx@Macbook-Water death_star % touch darth_vader.txt
gx@Macbook-Water death_star % touch princess_leia.txt
gx@Macbook-Water death_star % touch storm_trooper.txt
# In `galaxy_far_far_away`, make a directory named `tatooine`
gx@Macbook-Water death_star % cd ..
gx@Macbook-Water galaxy_far_far_away % mkdir tatooine
# and create the following files in it:
# luke.txt
# ben_kenobi.txt
gx@Macbook-Water galaxy_far_far_away % cd tatooine
gx@Macbook-Water tatooine % touch luke.txt
gx@Macbook-Water tatooine % touch ben_kenobi.txt
# Inside of `tatooine` make a directory called `millenium_falcon`
# and in it create:
# han_solo.txt
# chewbaca.txt
gx@Macbook-Water tatooine % mkdir millenium_falcon
gx@Macbook-Water tatooine % cd millenium_falcon
gx@Macbook-Water millenium_falcon % touch han_solo.txt
gx@Macbook-Water millenium_falcon % touch chewbaca.txt
# Rename `ben_kenobi.txt` to `obi_wan.txt
gx@Macbook-Water tatooine % mv ben_kenobi.txt obi_wan.txt
# Copy `storm_trooper.txt` from `death_star` to `tatooine`
gx@Macbook-Water tatooine % cd ..
gx@Macbook-Water galaxy_far_far_away % cd death_star
gx@Macbook-Water death_star % cp storm_trooper.txt tatooine
# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
gx@Macbook-Water tatooine % mv luke.txt ../millenium_falcon
gx@Macbook-Water tatooine % mv obi_wan.txt ../millenium_falcon
# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
gx@Macbook-Water tatooine % mv millenium_falcon ../galaxy_far_far_away
# Move `millenium_falcon` into `death_star`
gx@Macbook-Water tatooine % cd ..
gx@Macbook-Water galaxy_far_far_away % mv millenium_falcon death_star
# Move `princess_leia.txt` into the `millenium_falcon`
gx@Macbook-Water galaxy_far_far_away % cd death_star
gx@Macbook-Water death_star % mv princess_leia.txt ../millenium_falcon
# Delete `obi_wan.txt`
gx@Macbook-Water death_star % cd millenium_falcon
# In `galaxy_far_far_away`, make a directory called `yavin_4`
gx@Macbook-Water millenium_falcon % rm obi_wan.txt
# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
gx@Macbook-Water millenium_falcon % cd ..
gx@Macbook-Water death_star % mv millenium_falcon ../yavin_4
# Make a directory in `yavin_4` called `x_wing`
gx@Macbook-Water death_star % cd ..
gx@Macbook-Water galaxy_far_far_away % cd yavin_4
gx@Macbook-Water yavin_4 % mkdir x_wing
# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
gx@Macbook-Water yavin_4 % cd millenium_falcon
gx@Macbook-Water millenium_falcon % mv princess_leia_txt ../yavin_4
gx@Macbook-Water millenium_falcon % mv luke.txt ../x_wing
# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`
gx@Macbook-Water millenium_falcon % cd ..
gx@Macbook-Water yavin_4 % mv millenium_falcon ../galaxy_far_far_away
gx@Macbook-Water yavin_4 % mv x_wing ../galaxy_far_far_away
# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`
gx@Macbook-Water yavin_4 % cd ..
gx@Macbook-Water galaxy_far_far_away % cd death_star
gx@Macbook-Water death_star % mkdir tie_fighter_1
gx@Macbook-Water death_star % mkdir tie_fighter_2
gx@Macbook-Water death_star % mkdir tie_fighter_3
# Move `darth_vader.txt` into `tie_fighter_1`
gx@Macbook-Water death_star % mv darth_vader.txt tie_fighter_1
# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`
gx@Macbook-Water death_star % cp storm_trooper.txt tie_fighter_2
gx@Macbook-Water death_star % cp storm_trooper.txt tie_fighter_3
# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`
gx@Macbook-Water death_star % mv storm_trooper.txt ../galaxy_far_far_away
gx@Macbook-Water death_star % cd tie_fighter_2
gx@Macbook-Water tie_fighter_2 mv storm_trooper.txt ..
gx@Macbook-Water tie_fighter_2 % cd ..
gx@Macbook-Water death_star % mv storm_trooper.txt ..
gx@Macbook-Water death_star % cd tie_fighter_3
gx@Macbook-Water tie_fighter_3 mv storm_trooper.txt ..
gx@Macbook-Water tie_fighter_3 % cd ..
gx@Macbook-Water death_star % mv storm_trooper.txt ..
# Be careful with this command - cannot undo!

# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete

# Remove `tie_fighters` 2 and 3.
gx@Macbook-Water death_star % rm -r tie_fighter_2
gx@Macbook-Water death_star % rm -r tie_fighter_3
# Touch a file in "**x_wing**" called "**the_force.txt**".
gx@Macbook-Water death_star % cd ..
gx@Macbook-Water galaxy_far_far_away % cd x_wing
gx@Macbook-Water x_wing % mkdir the_force.txt
# Destroy the "**death_star**" and anyone inside of it.
gx@Macbook-Water x_wing % cd ..
gx@Macbook-Water galaxy_far_far_away % rm -r death_star
# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
gx@Macbook-Water galaxy_far_far_away % mv x_wing yavin_4
gx@Macbook-Water galaxy_far_far_away % mv millenium_falcon yavin_4
# Celebrate!