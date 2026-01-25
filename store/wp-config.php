<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u757238886_MdC4H' );

/** Database username */
define( 'DB_USER', 'u757238886_5bNvH' );

/** Database password */
define( 'DB_PASSWORD', 'nYubI1YMxx' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '0GiPR[i}OV0CW4-/+-j!.`:-WL>`6UxIu^xY>x)jnquz^L`a]cpCsP&BSJ6hOH.I' );
define( 'SECURE_AUTH_KEY',   'Qe`LPy[yi8%TOl]h($sQnNQ+)?a:LMZt[=1RP_J:*~xWSSFxYA78[CD;oW[lTF2k' );
define( 'LOGGED_IN_KEY',     'b)Zsn>zU~P=@A?;k@WlM=.yh{Y~vV0?T,Bh95*VRNk^E%~& ?x5cZ^oA!sA0yBs1' );
define( 'NONCE_KEY',         '*L.<q=u&{23l4o%aS.IK];mSaw]WJQLw+!dkDI<8D1$*@mx3)Ga;3_~KDQNu{U%|' );
define( 'AUTH_SALT',         '=@Ml?!SMV4NRViklUow&BaD<t8C]6]lWNw;okJ-DO#$YCn0c&~W~:7v8<flVHzUt' );
define( 'SECURE_AUTH_SALT',  'G<RyXfQziJ3?_O&o/gV^eO<Swg4F&`CI1?yQu8USfXlx!zEbTpic|y^4!zq.aID8' );
define( 'LOGGED_IN_SALT',    '>n%isfVc]wSlVZT]MGLG^:djDucF.,nHs #>(BoeEYs%YSMQ<$;amKk~p_5tnG;k' );
define( 'NONCE_SALT',        'Vud>`^,)c!ab!7Ty,eR?Av_gk?MV|~;PdFIOXzjM@uP`m|=@@63}8^>yOvD8EH3p' );
define( 'WP_CACHE_KEY_SALT', 'T@ 1{gr9q`MQ(W65-h~CBii8^:/khig7.D+aDa( N%q<UY+&?,,5PpO4[<+_:?nY' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
