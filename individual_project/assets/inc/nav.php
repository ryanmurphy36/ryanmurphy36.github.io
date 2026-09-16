            <nav id="primary-nav" aria-label="Primary">

                <button id="menu-button" type="button" aria-controls="primary-nav-list" aria-expanded="false">Menu</button>

                <ul id="primary-nav-list">
                    <li><a href="index.php" <?php if ($currentPage == "Overview") { echo 'class="current"'; } ?>>Overview</a></li>

                    <li>
                    <button type="button" class="submenu-toggle <?php if ($currentPage == "Characters") { echo 'current '; } ?>" aria-expanded="false" aria-controls="submenu-products"> Characters </button>
                        <ul id="submenu-products">
                            <li><a href="characters.php#sonic">Sonic the Hedgehog</a></li>
                            <li><a href="characters.php#eggman">Dr. Eggman</a></li>
                            <li><a href="characters.php#shadow">Shadow the Hedgehog</a></li>
                            <li><a href="characters.php#knuckles">Knuckles the Echidna</a></li>
                        </ul>
                    </li>

                    <li>
                    <button type="button" class="submenu-toggle <?php if ($currentPage == "History") { echo 'current '; } ?>" aria-expanded="false" aria-controls="submenu-products"> History </button>
                        <ul id="submenu-products">
                            <li><a href="history.php#ancients">The Ancients</a></li>
                            <li><a href="history.php#gaians">The Gaians</a></li>
                            <li><a href="history.php#babylonians">The Babylonians</a></li>
                            <li><a href="history.php#destroyed">The Destroyed</a></li>
                        </ul>
                    </li>

                    <li>
                    <button type="button" class="submenu-toggle <?php if ($currentPage == "Population") { echo 'current '; } ?>" aria-expanded="false" aria-controls="submenu-products"> Population </button>
                        <ul id="submenu">
                            <li><a href="population.php#animals">Animals</a></li>
                            <li><a href="population.php#animal_friends">Animal Friends</a></li>
                            <li><a href="population.php#humans">Humans</a></li>
                        </ul>
                    </li>

                    <li>
                    <button type="button" class="submenu-toggle <?php if ($currentPage == "Places") { echo 'current '; } ?>" aria-expanded="false" aria-controls="submenu-products"> Places </button>
                        <ul id="submenu"> 
                            <li><a href="places.php#station_square">Station Square</a></li>
                            <li><a href="places.php#angel_island">Angel Island</a></li>
                            <li><a href="places.php#green_hill">Green Hill Zone</a></li>
                            <li><a href="places.php#soleanna">Soleanna</a></li>
                        </ul>
                    </li>

                    <li>
                    <button type="button" class="submenu-toggle <?php if ($currentPage == "Orgs") { echo 'current '; } ?>" aria-expanded="false" aria-controls="submenu-products"> Organizations </button>
                        <ul id="submenu"> 
                        <li><a href="organizations.php#res">The Resistance / Restoration</a></li>
                        <li><a href="organizations.php#eggman_empire">Eggman Empire</a></li>
                        <li><a href="organizations.php#gun">Guardian Units of Nations</a></li>
                        </ul>
                    </li>

                    <li>
                    <button type="button" class="submenu-toggle <?php if ($currentPage == "Oddities") { echo 'current '; } ?>" aria-expanded="false" aria-controls="submenu-products"> Oddities </button>
                        <ul id="submenu"> 
                            <li><a href="oddities.php#death_egg">Death Egg</a></li>
                            <li><a href="oddities.php#little_planet">Little Planet</a></li>
                            <li><a href="oddities.php#ark">Space Colony ARK</a></li>
                            <li><a href="oddities.php#moon">The Moon</a></li>
                            <li><a href="oddities.php#lost_hex">Lost Hex</a></li>
                        </ul>
                    </li>

                    <li>
                    <button type="button" class="submenu-toggle <?php if ($currentPage == "Gemstones") { echo 'current '; } ?>" aria-expanded="false" aria-controls="submenu-products"> Gemstones </button>
                        <ul id="submenu">   
                            <li><a href="gemstones.php#chaos_emeralds">Chaos Emeralds</a></li>
                            <li><a href="gemstones.php#master_emerald">Master Emerald</a></li>
                            <li><a href="gemstones.php#time_stones">Time Stones</a></li>
                            <li><a href="gemstones.php#ruby">Phantom Ruby</a></li>
                            <li><a href="gemstones.php#topaz">Warp Topaz</a></li>
                        </ul>
                    </li>

                    <li>
                    <button type="button" class="submenu-toggle <?php if ($currentPage == "Tragedies") { echo 'current '; } ?>" aria-expanded="false" aria-controls="submenu-products"> Tragedies </button>
                        <ul id="submenu"> 
                        <li><a href="tragedies.php#flood">Flood of Station Square</a></li>
                        <li><a href="tragedies.php#black_arms_inv">Black Arms Invasion</a></li>
                        <li><a href="tragedies.php#raid">Raid on Space Colony ARK</a></li>
                        <li><a href="tragedies.php#shattered_world">Shattered World Crisis</a></li>
                        <li><a href="tragedies.php#war">Eggman's Conquest</a></li>
                        <li><a href="tragedies.php#metal_virus">Metal Virus</a></li>
                        </ul>
                    </li>

                    <li>
                    <button type="button" class="submenu-toggle <?php if ($currentPage == "Aliens") { echo 'current '; } ?>" aria-expanded="false" aria-controls="submenu-products"> Aliens </button>
                        <ul id="submenu"> 
                            <li><a href="aliens.php#wisps">Wisps</a></li>
                            <li><a href="aliens.php#black_arms">Black Arms</a></li>
                            <li><a href="aliens.php#chao">The Chao / Chaos</a></li>
                        </ul>
                    </li>

                    <li ><a href="quiz.php" <?php if ($currentPage == "Quiz") { echo 'class="current"'; } ?>>Quiz</a></li>

                    <li>
                    <button type="button" class="submenu-toggle <?php if ($currentPage == "Citation") { echo 'current '; } ?>" <?php if ($currentPage == "Reviews") { echo 'current '; } ?>" aria-expanded="false" aria-controls="submenu-products"> Wrap-Up </button>
                        <ul id="submenu"> 
                            <li><a href="reviews.php">Reviews</a></li>
                            <li><a href="cite.php">Citation</a></li>
                        </ul>
                    </li>    
            </nav>