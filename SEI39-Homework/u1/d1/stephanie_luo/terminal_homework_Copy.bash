# Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt

# Open the **Terminal app**

# Create a new directory on your desktop called `galaxy_far_far_away`and enter it
PS C:\Users\flowe\OneDrive\Desktop> mkdir galaxy_far_far_away
PS C:\Users\flowe\OneDrive\Desktop> cd galaxy_far_far_away

# Create a directory called `death_star`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away> mkdir death_star
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away> cd death_star

# and make the following files inside of it:
# darth_vader.txt
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> New-Item darth_vader.txt
# princess_leia.txt
# storm_trooper.txt
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> New-Item princess_leia.txt, storm_trooper.txt

# In `galaxy_far_far_away`, make a directory named `tatooine`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> cd ..
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away> mkdir tatooine

# and create the following files in it:
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away> cd tatooine
# luke.txt
# ben_kenobi.txt
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\tatooine> New-Item luke.txt, ben_kenobi.txt

# Inside of `tatooine` make a directory called `millenium_falcon`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\tatooine> mkdir millenium_falcon
# and in it create:
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\tatooine> cd millenium_falcon
# han_solo.txt
# chewbaca.txt
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\tatooine\millenium_falcon> New-Item han_solo.txt, chewbaca.txt

# Rename `ben_kenobi.txt` to `obi_wan.txt
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\tatooine\millenium_falcon> cd ..
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\tatooine> mv ben_kenobi.txt obi_wan.txt

# Copy `storm_trooper.txt` from `death_star` to `tatooine`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\tatooine> cd ../death_star
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> cp storm_trooper.txt ../tatooine

# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> cd ../tatooine
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\tatooine> mv luke.txt, obi_wan.txt millenium_falcon

# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\tatooine> mv millenium_falcon ..

# Move `millenium_falcon` into `death_star`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\tatooine> cd ..
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away> mv millenium_falcon death_star

# Move `princess_leia.txt` into the `millenium_falcon`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> mv princess_leia.txt millenium_falcon

# Delete `obi_wan.txt`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> cd millenium_falcon
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star\millenium_falcon> rm obi_wan.txt

# In `galaxy_far_far_away`, make a directory called `yavin_4`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star\millenium_falcon> cd ../..
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away> mkdir yavin_4

# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away> cd death_star
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> mv millenium_falcon ../yavin_4

# Make a directory in `yavin_4` called `x_wing`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> cd ../yavin_4

# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\yavin_4> cd millenium_falcon
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\yavin_4\millenium_falcon> mv princess_leia.txt ..
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\yavin_4\millenium_falcon> mv luke.txt ../x_wing

# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\yavin_4\millenium_falcon> cd ..
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\yavin_4> mv millenium_falcon, x_wing ..

# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`
S C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\yavin_4> cd ../death_star
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> mkdir tie_fighter_1, tie_fighter_2, tie_fighter_3

# Move `darth_vader.txt` into `tie_fighter_1`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> mv darth_vader.txt tie_fighter_1

# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> cp storm_trooper.txt tie_fighter_2
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> cp storm_trooper.txt tie_fighter_3

# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> mv tie_fighter_1, tie_fighter_2, tie_fighter_3 ..

# Be careful with this command - cannot undo!

# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete

# Remove `tie_fighters` 2 and 3.
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\death_star> cd ..
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away> rm -r tie_fighter_2, tie_fighter_3

# Touch a file in "**x_wing**" called "**the_force.txt**".
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away> cd x_wing
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\x_wing> New-Item the_force.txt

# Destroy the "**death_star**" and anyone inside of it.
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away\x_wing> cd ..
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away> rm -r death_star

# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
PS C:\Users\flowe\OneDrive\Desktop\galaxy_far_far_away> mv millenium_falcon, x_wing yavin_4

# Celebrate!