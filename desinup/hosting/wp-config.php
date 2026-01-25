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
define( 'DB_NAME', 'u757238886_hMusA' );

/** Database username */
define( 'DB_USER', 'u757238886_IGXJh' );

/** Database password */
define( 'DB_PASSWORD', 'uoIBwnT4fA' );

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
define( 'AUTH_KEY',          'H!^M)XuQwv@Eb<GeynvpvJC;.YOTC-&2z|m*0YN0Fw^kr@iuXqTG:^4#@m S~AVN' );
define( 'SECURE_AUTH_KEY',   '|h~<Rc1Ox!-VvONJGN?ni-p}Vd#}|_h>#?VT9~,8>g7W}_7lQW%>0KQlloBFsLT&' );
define( 'LOGGED_IN_KEY',     '22 NS5?;&:GrE{:afpHWc9f_qc%gRivn{K)8T_&L@G5.O@oF~qh6|^|L|k.!8Vuv' );
define( 'NONCE_KEY',         '5}YDF1f]V~NJEoLi@>k~/#d=@mh^:#w^TmvH(VBg?!U+du}Uge-jLT8qHxk]6C.r' );
define( 'AUTH_SALT',         'Fj$uc>k.O5`A`WKH~5~&.(AEPQ0>L5{$5Af+9C*u,=f66>(heO>@b0LE-oN=irs|' );
define( 'SECURE_AUTH_SALT',  'zprhz%,kJ*{2s<,2HwbHJ.Pwuf+Ev<Fcyj9jJd{Gn8`THdUD;N44KGmWh<SccTUx' );
define( 'LOGGED_IN_SALT',    'HZ}J~$HX?2hP22<A7YOP.k|XMV4eBM llwBIVcUz)/fiA=qILhNvqet%Q55S8YzY' );
define( 'NONCE_SALT',        '1SfB(aHU-~%zs)egslp*f agR?1ajZ]l}(o*|.tls5pm(uefZ5~XdDbWgv_T> 6V' );
define( 'WP_CACHE_KEY_SALT', 'c{we)Nn[@BOq$_#3mDQumQ(Kc2FEl,Bqp^~i;T;6u+x;pQiV8Rhv`hlGHO1z;oDU' );


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
define( 'COOKIEHASH', '42573aac5188357aba4aa51a9c9a3267' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
