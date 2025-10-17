import React from "react";
import { motion } from "framer-motion";

// --- GLOBAL CONFIGURATION ---

// Configuration for continuous infinite animations (Floating/Pulsing)
const floatTransition = {
    repeat: Infinity,
    duration: 5,
    ease: "easeInOut" as const,
};

// Configuration for the main device pulse/float
const deviceFloatTransition = {
    repeat: Infinity,
    duration: 4,
    ease: "easeInOut" as const,
    delay: 0.3,
};

// Configuration for infinite scale pulse on small items
const pulseTransition = {
    repeat: Infinity,
    repeatType: "reverse" as const,
    duration: 3,
    ease: "easeInOut" as const,
};

// New blinking animation function (for code lines - with randomization)
const blinkingTransition = (delay = 0.5) => ({
    repeat: Infinity,
    repeatType: "reverse" as const,
    duration: 1.5,
    ease: "linear" as const,
    delay: delay,
});

// New helper function to introduce randomized delay for blinking
const randomDelay = (max = 1.5) => Math.random() * max;

// Styles for the animated </> code icon (previously split across multiple style attributes)
const codeIconStyle = {
    fill: '#FBD131',
    fontFamily: "'Anton-Regular'",
    fontSize: '28.5266px',
    // Merged: transformOrigin is required for correct centering of the animation
    transformOrigin: 'center'
};


/**
 * NlpIcon - A complex, animated SVG component for Natural Language Processing (NLP).
 * Integrates Framer Motion for subtle, continuous animations and hover effects.
 *
 * @param {string} className - Optional Tailwind CSS classes for the container SVG.
 * @param {object} props - Additional props passed directly to the motion.svg container.
 */
const NlpIcon = ({ className = "", width = 900, height = 900, ...props }) => {

    // Configuration for the main device interaction (Hover)
    const deviceHover = {
        scale: 1.05,
        transition: { type: "spring" as const, stiffness: 300, damping: 10 }
    };

    // Variants for sequential animation of the data bars on hover (mimicking WiFi/signal activity)
    const dataBarVariants = {
        hover: i => ({
            y: -4, // Moves up 4 units
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 500,
                damping: 20,
                delay: i * 0.1, // Staggered delay
            }
        }),
        rest: {
            y: 0, // Returns to original position
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 500,
                damping: 20,
            }
        }
    };


    // The entire raw SVG content, converted to valid JSX
    return (
        // Added a slight maroon border via Tailwind class for the required "border" look
        <motion.svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 500 500"
            // Removed style={{ enableBackground: 'new 0 0 500 500' }} as it's not strictly necessary in JSX
            xmlSpace="preserve"
            className={`${className}  `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            height={200}
            width={200}
            {...props}
        >
            {/* Background - REMOVED the solid rect fill as requested (only keeping the border) */}
            <motion.g id="Background"
                animate={{ opacity: [1, 0.9, 1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
                {/* Original background rect removed */}
            </motion.g>

            <g id="Objects">
                {/* Clouds - Subtle floating + infinite pulsing scale for attractiveness */}
                <motion.g
                    animate={{
                        y: [0, -6, 0],
                        rotate: [0, 0.5, 0],
                        scale: [1, 1.05, 1] // Added infinite scale pulse
                    }}
                    transition={{ ...floatTransition, duration: 4, delay: 0.1 }}
                >
                    {/* Cloud paths - Changed fill from blue to light maroon/red: #FECACA */}
                    <path style={{ fill: '#FECACA' }} d="M400.938,146.749c1.285-5.338-1.48-10.397-6.516-11.571c-2.596-0.605-5.314-0.059-7.645,1.309c0.102-0.969,0.172-1.947,0.172-2.951c0-12.082-7.557-21.877-16.881-21.877c-7.369,0-13.617,6.128-15.922,14.658c-2.986-3.039-6.805-4.66-10.499-4.045c-6.504,1.084-10.172,8.689-8.255,17.032c-1.256-0.633-2.653-0.996-4.135-0.996c-4.753,0-8.7,3.641-9.533,8.441H400.938z" />
                    <path style={{ fill: '#FECACA' }} d="M168.322,309.536c1.285-5.338-1.48-10.397-6.516-11.571c-2.596-0.605-5.314-0.059-7.645,1.309c0.102-0.969,0.172-1.947,0.172-2.951c0-12.082-7.557-21.877-16.881-21.877c-7.369,0-13.617,6.128-15.922,14.658c-2.986-3.039-6.805-4.66-10.499-4.045c-6.504,1.084-10.172,8.689-8.255,17.032c-1.256-0.633-2.653-0.996-4.135-0.996c-4.753,0-8.7,3.641-9.533,8.441H168.322z" />
                    <path style={{ fill: '#FECACA' }} d="M397.625,395.85c1.285-5.338-1.48-10.398-6.516-11.571c-2.596-0.605-5.314-0.059-7.645,1.309c0.102-0.969,0.172-1.947,0.172-2.951c0-12.082-7.557-21.877-16.881-21.877c-7.369,0-13.617,6.128-15.922,14.658c-2.986-3.039-6.805-4.66-10.499-4.045c-6.504,1.084-10.172,8.689-8.255,17.032c-1.256-0.633-2.653-0.996-4.135-0.996c-4.753,0-8.7,3.641-9.533,8.441H397.625z" />
                    <path style={{ fill: '#FECACA' }} d="M294.291,90.291c1.285-5.338-1.48-10.397-6.516-11.571c-2.596-0.605-5.315-0.059-7.645,1.309c0.102-0.969,0.172-1.947,0.172-2.951c0-12.082-7.557-21.877-16.881-21.877c-7.369,0-13.617,6.128-15.922,14.658c-2.986-3.039-6.805-4.66-10.499-4.045c-6.504,1.084-10.172,8.689-8.255,17.032c-1.256-0.633-2.653-0.996-4.135-0.996c-4.753,0-8.7,3.641-9.533,8.441H294.291z" />

                    {/* Smaller floating dots - Changed fill to light maroon/red: #FECACA */}
                    <path style={{ fill: '#FECACA' }} d="M417.424,112.294c0,3.454-2.801,6.254-6.254,6.254c-3.455,0-6.254-2.8-6.254-6.254c0-3.454,2.799-6.254,6.254-6.254C414.623,106.04,417.424,108.839,417.424,112.294z" />
                    <path style={{ fill: '#FECACA' }} d="M124.285,127.277c0,3.454-2.801,6.254-6.254,6.254c-3.455,0-6.254-2.8-6.254-6.254s2.799-6.254,6.254-6.254C121.484,121.023,124.285,123.823,124.285,127.277z" />
                    <path style={{ fill: '#FECACA' }} d="M92.773,84.794c0,2.201-1.785,3.987-3.986,3.987c-2.203,0-3.986-1.786-3.986-3.987c0-2.202,1.783-3.986,3.986-3.986C90.988,80.808,92.773,82.592,92.773,84.794z" />
                    <path style={{ fill: '#FECACA' }} d="M94.534,282.228c0,2.201-1.785,3.987-3.986,3.987c-2.203,0-3.986-1.786-3.986-3.987c0-2.202,1.783-3.986,3.986-3.986C92.749,278.242,94.534,280.026,94.534,282.228z" />
                    <path style={{ fill: '#FECACA' }} d="M83.714,401.566c0,2.201-1.785,3.987-3.986,3.987c-2.203,0-3.986-1.786-3.986-3.987c0-2.202,1.783-3.986,3.986-3.986C81.929,397.58,83.714,399.364,83.714,401.566z" />
                    <path style={{ fill: '#FECACA' }} d="M417.705,402.566c0,2.201-1.785,3.986-3.986,3.986c-2.203,0-3.986-1.785-3.986-3.986c0-2.202,1.783-3.986,3.986-3.986C415.92,398.58,417.705,400.364,417.705,402.566z" />
                    <path style={{ fill: '#FECACA' }} d="M424.258,257.081c0,2.201-1.785,3.987-3.986,3.987c-2.203,0-3.986-1.786-3.986-3.987c0-2.202,1.783-3.986,3.986-3.986C422.473,253.095,424.258,254.879,424.258,257.081z" />
                    <path style={{ fill: '#FECACA' }} d="M370.018,73.986c0,2.201-1.785,3.987-3.986,3.987c-2.203,0-3.986-1.786-3.986-3.987c0-2.202,1.783-3.986,3.986-3.986C368.232,70,370.018,71.784,370.018,73.986z" />
                </motion.g>

                {/* Main Devices Group - Adds the primary hover effect and the overall float animation */}
                <motion.g
                    id="MainDevices"
                    whileHover={deviceHover}
                >
                    {/* Base Platform (Shadow/Bar) - MOVED INSIDE to float with the devices */}
                    <path style={{ fill: '#B91C1C', opacity: '0.3' }} d="M436.019,426.315c0,4.872-3.352,8.819-7.488,8.819H71.469c-4.135,0-7.488-3.947-7.488-8.819l0,0c0-4.872,3.353-8.819,7.488-8.819h357.063C432.667,417.496,436.019,421.443,436.019,426.315L436.019,426.315z" />

                    {/* Gears - Keep infinite rotation for movement */}
                    <motion.g
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        style={{ transformOrigin: '347.906px 254.119px' }}
                    >
                        <path style={{ fill: '#29354A' }} d="M380.037,260.651v-13.123h-8.449c-0.543-1.956-1.32-3.814-2.305-5.538l5.982-5.98l-9.279-9.278l-5.988,5.985c-1.725-0.977-3.578-1.75-5.529-2.288v-8.47h-13.123v8.47c-1.951,0.538-3.805,1.312-5.531,2.288l-5.988-5.985l-9.277,9.278l5.98,5.98c-0.982,1.725-1.76,3.582-2.303,5.538h-8.449v13.123h8.434c0.537,1.963,1.315,3.825,2.297,5.559l-5.959,5.957l9.277,9.28l5.951-5.95c1.736,0.986,3.602,1.767,5.568,2.31v8.408h13.123v-8.408c1.967-0.543,3.832-1.324,5.568-2.31l5.949,5.95l9.279-9.28l-5.957-5.957c0.98-1.733,1.758-3.596,2.297-5.559H380.037z M347.906,265.771c-6.434,0-11.652-5.218-11.652-11.652c0-6.437,5.219-11.654,11.652-11.654c6.438,0,11.652,5.218,11.652,11.654C359.559,260.553,354.344,265.771,347.906,265.771z" />
                    </motion.g>
                    <motion.g
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        style={{ transformOrigin: '97.078px 356.09px' }}
                    >
                        <path style={{ fill: '#29354A' }} d="M129.209,362.622v-13.123h-8.449c-0.543-1.956-1.32-3.813-2.305-5.538l5.982-5.979l-9.279-9.279l-5.988,5.986c-1.725-0.977-3.578-1.751-5.529-2.289v-8.47H90.518v8.47c-1.951,0.538-3.805,1.313-5.531,2.289l-5.988-5.986l-9.277,9.279l5.98,5.979c-0.982,1.726-1.76,3.582-2.303,5.538h-8.449v13.123h8.434c0.537,1.963,1.314,3.825,2.297,5.559l-5.959,5.957l9.277,9.28l5.951-5.95c1.736,0.986,3.602,1.768,5.568,2.31v8.408h13.123v-8.408c1.967-0.543,3.832-1.324,5.568-2.31l5.949,5.95l9.279-9.28l-5.957-5.957c0.98-1.733,1.758-3.596,2.297-5.559H129.209z M97.078,367.741c-6.434,0-11.652-5.218-11.652-11.652c0-6.437,5.219-11.654,11.652-11.654c6.438,0,11.652,5.218,11.652,11.654C108.73,362.523,103.516,367.741,97.078,367.741z" />
                    </motion.g>
                    <motion.g
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                        style={{ transformOrigin: '159.659px 97.106px' }}
                    >
                        <path style={{ fill: '#29354A' }} d="M191.79,103.639V90.516h-8.45c-0.542-1.956-1.32-3.813-2.304-5.538l5.982-5.979l-9.279-9.279l-5.987,5.986c-1.725-0.977-3.578-1.751-5.529-2.288v-8.471h-13.123v8.471c-1.951,0.537-3.806,1.312-5.531,2.288l-5.988-5.986l-9.277,9.279l5.98,5.979c-0.982,1.726-1.759,3.582-2.302,5.538h-8.449v13.123h8.433c0.537,1.963,1.314,3.825,2.297,5.559l-5.958,5.957l9.277,9.28l5.951-5.95c1.735,0.986,3.602,1.768,5.568,2.311v8.408h13.123v-8.408c1.966-0.543,3.831-1.324,5.567-2.311l5.949,5.95l9.279-9.28l-5.957-5.957c0.981-1.733,1.758-3.596,2.297-5.559H191.79z M159.659,108.758c-6.435,0-11.652-5.218-11.652-11.652c0-6.437,5.218-11.653,11.652-11.653c6.438,0,11.652,5.217,11.652,11.653C171.311,103.54,166.097,108.758,159.659,108.758z" />
                    </motion.g>

                    {/* Main Mobile Device - Floats up and down */}
                    <motion.g
                        animate={{ y: [0, 3, 0] }}
                        transition={deviceFloatTransition}
                    >
                        {/* Outer Frame (Phone) - Changed fill to light grey/beige: #FDF2F8 */}
                        <path style={{ fill: '#29354A' }} d="M318.524,85.355H189.05c-15.581,0-28.257,11.572-28.257,25.793v289.375c0,14.225,12.676,25.792,28.257,25.792h129.475c15.578,0,28.259-11.567,28.259-25.792V111.148C346.783,96.928,334.102,85.355,318.524,85.355z" />
                        <path style={{ fill: '#FFFFFF' }} d="M315.061,90.033H192.516c-14.745,0-26.744,11.245-26.744,25.054v281.508c0,13.813,11.999,25.043,26.744,25.043h122.546c14.74,0,26.732-11.23,26.732-25.043V115.087C341.793,101.278,329.802,90.033,315.061,90.033z" />

                        {/* Screen Content - Pulses subtly */}
                        <motion.g
                            animate={{ scale: [1, 1.01, 1], opacity: [1, 0.95, 1] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            style={{ transformOrigin: '50% 50%' }}
                        >
                            {/* Screen BG - Changed fill from blue to dark red screen: #801515 */}
                            <path style={{ fill: '#801515' }} d="M183.617,392.7h139.751c3.797,0,6.873-2.883,6.873-6.439V125.785c0-3.552-3.076-6.429-6.873-6.429H183.617c-3.78,0-6.863,2.877-6.863,6.429v260.476C176.754,389.817,179.837,392.7,183.617,392.7z" />
                            <path style={{ fill: '#FFFFFF' }} d="M288.148,100.684h-68.726c-8.269,0-14.999,6.308-14.999,14.052v12.341c0,7.748,6.729,14.046,14.999,14.046h68.726c8.269,0,14.992-6.298,14.992-14.046v-12.341C303.141,106.991,296.417,100.684,288.148,100.684z" />

                            {/* Text Update: TECHNOLOGIES SERVICES */}
                            <text transform="matrix(1 0 0 1 214.043 336.209)" style={{ fill: '#FFFFFF', fontFamily: "'Anton-Regular'", fontSize: '18.3726px' }}>TECHNOLOGIES</text>
                            <text transform="matrix(1 0 0 1 207.1621 357.4111)" style={{ fill: '#FFFFFF', fontFamily: "'Anton-Regular'", fontSize: '18.3726px' }}>SERVICES</text>
                            <text transform="matrix(1 0 0 1 201.8804 378.2632)" style={{ fill: '#FFFFFF', fontFamily: "'Anton-Regular'", fontSize: '18.3726px' }}> </text> {/* Removed PROCESSING */}
                        </motion.g>

                        {/* Content Icons on Screen */}
                        <g>
                            <rect x="228.092" y="236.575" style={{ fill: '#EF9B20' }} width="46.001" height="5.986" />
                            <g>
                                <g>
                                    <g>
                                        <g>
                                            <motion.line
                                                style={{ fill: 'none', stroke: '#EF9B20', strokeWidth: '2.0881', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }}
                                                x1="226.188" y1="186.996" x2="226.188" y2="167.7"
                                                animate={{ y1: [186.996, 184.996, 186.996], y2: [167.7, 165.7, 167.7] }}
                                                transition={floatTransition}
                                            />
                                            <path style={{ fill: '#EF9B20' }} d="M232.629,193.148c0,1.113-0.902,2.017-2.017,2.017h-8.85c-1.113,0-2.017-0.903-2.017-2.017v-9.642c0-1.114,0.903-2.018,2.017-2.018h8.85c1.114,0,2.017,0.903,2.017,2.018V193.148z" />
                                            <path style={{ fill: '#FBD131' }} d="M231.902,163.168c0,3.156-2.559,5.714-5.714,5.714c-3.156,0-5.714-2.558-5.714-5.714c0-3.155,2.559-5.715,5.714-5.715C229.343,157.453,231.902,160.013,231.902,163.168z" />
                                        </g>
                                        <g>
                                            <motion.line
                                                style={{ fill: 'none', stroke: '#EF9B20', strokeWidth: '2.0881', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }}
                                                x1="275.987" y1="186.996" x2="275.987" y2="167.7"
                                                animate={{ y1: [186.996, 182.996, 186.996], y2: [167.7, 163.7, 167.7] }}
                                                transition={{ ...floatTransition, duration: 6 }}
                                            />
                                            <path style={{ fill: '#EF9B20' }} d="M282.43,193.148c0,1.113-0.903,2.017-2.018,2.017h-8.85c-1.113,0-2.018-0.903-2.018-2.017v-9.642c0-1.114,0.904-2.018,2.018-2.018h8.85c1.114,0,2.018,0.903,2.018,2.018V193.148z" />
                                            <path style={{ fill: '#FBD131' }} d="M281.701,163.168c0,3.156-2.559,5.714-5.714,5.714c-3.156,0-5.715-2.558-5.715-5.714c0-3.155,2.559-5.715,5.715-5.715C279.143,157.453,281.701,160.013,281.701,163.168z" />
                                        </g>
                                    </g>
                                    <path style={{ fill: '#FBD131' }} d="M288.428,230.295c0,3.469-2.813,6.28-6.283,6.28h-62.107c-3.469,0-6.281-2.811-6.281-6.28v-36.948c0-3.47,2.812-6.281,6.281-6.281h62.107c3.471,0,6.283,2.812,6.283,6.281V230.295z" />
                                    <g>
                                        <path style={{ fill: '#EF9B20' }} d="M282.43,216.525c0,2.79-2.36,5.051-5.272,5.051h-52.13c-2.912,0-5.271-2.261-5.271-5.051v-18.459c0-2.79,2.359-5.051,5.271-5.051h52.13c2.912,0,5.272,2.261,5.272,5.051V216.525z" />
                                        <path style={{ fill: '#29354A' }} d="M280.978,215.338c0,2.618-2.122,4.739-4.741,4.739h-50.291c-2.618,0-4.741-2.121-4.741-4.739v-16.084c0-2.618,2.124-4.741,4.741-4.741h50.291c2.619,0,4.741,2.123,4.741,4.741V215.338z" />
                                    </g>
                                    <g>
                                        <path style={{ fill: '#FC2863' }} d="M239.661,212.968c0,1.284-1.041,2.325-2.326,2.325l0,0c-1.285,0-2.326-1.041-2.326-2.325v-11.556c0-1.285,1.042-2.326,2.326-2.326l0,0c1.285,0,2.326,1.041,2.326,2.326V212.968z" />
                                        <path style={{ fill: '#FC2863' }} d="M267.166,212.968c0,1.284-1.041,2.325-2.327,2.325l0,0c-1.283,0-2.325-1.041-2.325-2.325v-11.556c0-1.285,1.042-2.326,2.325-2.326l0,0c1.286,0,2.327,1.041,2.327,2.326V212.968z" />
                                    </g>
                                    <path style={{ fill: '#EF9B20' }} d="M266.78,229.274c0,2.184-1.772,3.955-3.955,3.955h-23.466c-2.184,0-3.956-1.772-3.956-3.955l0,0c0-2.186,1.772-3.958,3.956-3.958h23.466C265.009,225.316,266.78,227.089,266.78,229.274L266.78,229.274z" />
                                    <g>
                                        <rect x="239.33" y="225.316" style={{ fill: '#FBD131' }} width="1.044" height="7.913" />
                                        <rect x="243.078" y="225.316" style={{ fill: '#FBD131' }} width="1.044" height="7.913" />
                                        <rect x="246.826" y="225.316" style={{ fill: '#FBD131' }} width="1.043" height="7.913" />
                                        <rect x="250.571" y="225.316" style={{ fill: '#FBD131' }} width="1.045" height="7.913" />
                                        <rect x="254.319" y="225.316" style={{ fill: '#FBD131' }} width="1.044" height="7.913" />
                                        <rect x="258.066" y="225.316" style={{ fill: '#FBD131' }} width="1.045" height="7.913" />
                                        <rect x="261.814" y="225.316" style={{ fill: '#FBD131' }} width="1.043" height="7.913" />
                                    </g>
                                </g>
                                <g>
                                    <motion.polyline
                                        style={{ fill: 'none', stroke: '#EF9B20', strokeWidth: '8.4493', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }}
                                        points="205.788,260.188 191.158,275.48 209.324,293.858"
                                        // Animation: Continuous motion
                                        animate={{ x: [0, -3, 0], y: [0, 3, 0] }}
                                        transition={{ ...floatTransition, duration: 2.5 }}
                                    />
                                    <g>
                                        <path style={{ fill: '#29354A' }} d="M219.86,310.861c1.049-1.05-1.159-4.955-4.929-8.721l-3.799,3.801C214.904,309.709,218.813,311.909,219.86,310.861z" />
                                        <path style={{ fill: '#29354A' }} d="M225.75,309.992c1.638-1.724-3.697-7.443-7.466-11.208l-3.798,3.803C218.256,306.353,224.122,311.707,225.75,309.992z" />
                                        <path style={{ fill: '#29354A' }} d="M226.567,304.147c1.045-1.05-1.162-4.957-4.931-8.72l-3.798,3.803C221.608,302.994,225.515,305.197,226.567,304.147z" />
                                    </g>
                                    <g>
                                        <path style={{ fill: '#FBD131' }} d="M220.204,290.681c2.296,2.322,2.276,6.068-0.045,8.365l-5.407,5.348c-2.322,2.298-6.068,2.276-8.365-0.045l-10.928-11.05c-2.298-2.32-2.277-6.064,0.044-8.363l5.406-5.346c2.323-2.3,6.068-2.278,8.365,0.043L220.204,290.681z" />
                                        <path style={{ fill: '#EF9B20' }} d="M216.351,294.397c0,0.642-0.52,1.162-1.163,1.162c-0.641,0-1.161-0.521-1.161-1.162c0-0.641,0.52-1.161,1.161-1.161C215.831,293.235,216.351,293.756,216.351,294.397z" />
                                        <polyline style={{ fill: 'none', stroke: '#EF9B20', strokeWidth: '2.5348', strokeLinejoin: 'round', strokeMiterlimit: 10 }} points="209.841,280.205 202.268,287.954 216.876,302.292" />
                                        <path style={{ fill: '#EF9B20' }} d="M212.295,290.829c0,0.642-0.52,1.161-1.163,1.161c-0.642,0-1.161-0.52-1.161-1.161c0-0.643,0.52-1.162,1.161-1.162C211.775,289.667,212.295,290.186,212.295,290.829z" />
                                    </g>
                                    <g>
                                        <path style={{ fill: '#FBD131' }} d="M221.097,257.183c0,6.503-5.271,11.775-11.773,11.775c-6.502,0-11.773-5.273-11.773-11.775c0-6.502,5.271-11.772,11.773-11.772C215.826,245.41,221.097,250.681,221.097,257.183z" />
                                        <path style={{ fill: '#EF9B20' }} d="M212.233,255.919c0,0.641-0.52,1.162-1.163,1.162c-0.641,0-1.162-0.521-1.162-1.162c0-0.643,0.52-1.162,1.162-1.162C211.714,254.757,212.233,255.276,212.233,255.919z" />
                                        <path style={{ fill: '#EF9B20' }} d="M216.614,254.087c0,0.642-0.52,1.162-1.162,1.162c-0.642,0-1.162-0.52-1.162-1.162c0-0.643,0.52-1.162,1.162-1.162C216.094,252.925,216.614,253.444,216.614,254.087z" />
                                        <defs>
                                            <path id="SVGID_1_" d="M221.097,257.183c0,6.503-5.271,11.775-11.773,11.775c-6.502,0-11.773-5.273-11.773-11.775c0-6.502,5.271-11.772,11.773-11.772C215.826,245.41,221.097,250.681,221.097,257.183z" />
                                        </defs>
                                        <clipPath id="SVGID_00000055709452674488072030000017359490895704490900_">
                                            <use xlinkHref="#SVGID_1_" style={{ overflow: 'visible' }} />
                                        </clipPath>
                                        <motion.path
                                            style={{ clipPath: 'url(#SVGID_00000055709452674488072030000017359490895704490900_)', fill: 'none', stroke: '#EF9B20', strokeWidth: '2.5348', strokeLinejoin: 'round', strokeMiterlimit: 10 }}
                                            d="M209.696,244.266c0,0-6.583,6.513-3.344,14.116c3.239,7.604,13.378,6.848,13.378,6.848"
                                            // Animation: Continuous motion
                                            animate={{ pathLength: [0, 1, 0.5, 1], rotate: [0, 3, 0] }}
                                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                        />
                                    </g>
                                </g>
                                <g>
                                    <motion.polyline
                                        style={{ fill: 'none', stroke: '#EF9B20', strokeWidth: '8.4493', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }}
                                        points="297.54,254.198 316.942,245.751 316.942,221.779"
                                        // Animation: Continuous motion
                                        animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                                        transition={{ ...floatTransition, duration: 2.8 }}
                                    />
                                    <g>
                                        <path style={{ fill: '#29354A' }} d="M321.667,201.217c-1.482,0.008-2.661,4.336-2.629,9.665l5.373-0.03C324.379,205.521,323.15,201.208,321.667,201.217z" />
                                        <path style={{ fill: '#29354A' }} d="M316.872,197.689c-2.378,0.075-2.61,7.893-2.579,13.221l5.375-0.033C319.637,205.55,319.236,197.616,316.872,197.689z" />
                                        <path style={{ fill: '#29354A' }} d="M312.179,201.271c-1.482,0.009-2.662,4.338-2.63,9.665l5.372-0.03C314.892,205.577,313.666,201.265,312.179,201.271z" />
                                    </g>
                                    <g>
                                        <path style={{ fill: '#FBD131' }} d="M307.228,215.316c0.002-3.265,2.651-5.914,5.916-5.913l7.604,0.004c3.268,0,5.914,2.649,5.913,5.916l-0.004,15.54c-0.001,3.267-2.648,5.913-5.916,5.912l-7.603-0.001c-3.269-0.002-5.915-2.649-5.915-5.916L307.228,215.316z" />
                                        <path style={{ fill: '#EF9B20' }} d="M312.58,215.386c0.453-0.455,1.189-0.459,1.644-0.007c0.456,0.451,0.46,1.186,0.008,1.644c-0.452,0.455-1.186,0.459-1.645,0.007C312.133,216.579,312.129,215.844,312.58,215.386z" />
                                        <polyline style={{ fill: 'none', stroke: '#EF9B20', strokeWidth: '2.5348', strokeLinejoin: 'round', strokeMiterlimit: 10 }} points="307.224,230.052 318.059,229.873 317.76,209.406" />
                                        <path style={{ fill: '#EF9B20' }} d="M312.953,220.775c0.453-0.455,1.188-0.459,1.644-0.008c0.455,0.451,0.458,1.187,0.009,1.644c-0.452,0.455-1.187,0.46-1.645,0.008C312.505,221.968,312.504,221.231,312.953,220.775z" />
                                    </g>
                                    <g>
                                        <path style={{ fill: '#FBD131' }} d="M282.258,251.051c2.515-5.997,9.413-8.819,15.409-6.306c5.999,2.512,8.821,9.411,6.309,15.408c-2.513,5.997-9.414,8.821-15.41,6.307C282.57,263.947,279.745,257.047,282.258,251.051z" />
                                        <path style={{ fill: '#EF9B20' }} d="M289.943,255.643c0.249-0.592,0.931-0.87,1.522-0.621c0.592,0.247,0.87,0.928,0.622,1.519c-0.247,0.593-0.928,0.871-1.522,0.622C289.974,256.915,289.696,256.234,289.943,255.643z" />
                                        <path style={{ fill: '#EF9B20' }} d="M285.195,255.64c0.249-0.592,0.929-0.872,1.521-0.623c0.594,0.248,0.872,0.928,0.623,1.521c-0.247,0.594-0.929,0.872-1.521,0.623C285.226,256.912,284.947,256.231,285.195,255.64z" />
                                        <defs>
                                            <path id="SVGID_00000102515534146831892880000009199796792719291787_" d="M282.258,251.051c2.515-5.997,9.413-8.819,15.409-6.306c5.999,2.512,8.821,9.411,6.309,15.408c-2.513,5.997-9.414,8.821-15.41,6.307C282.57,263.947,279.745,257.047,282.258,251.051z" />
                                        </defs>
                                        <clipPath id="SVGID_00000061437658828815476900000017743576700452315817_">
                                            <use xlinkHref="#SVGID_00000102515534146831892880000009199796792719291787_" style={{ overflow: 'visible' }} />
                                        </clipPath>
                                        <motion.path
                                            style={{ clipPath: 'url(#SVGID_00000061437658828815476900000017743576700452315817_)', fill: 'none', stroke: '#EF9B20', strokeWidth: '2.5348', strokeLinejoin: 'round', strokeMiterlimit: 10 }}
                                            d="M287.778,267.372c0,0,8.591-3.461,8.542-11.727c-0.047-8.265-9.689-11.486-9.689-11.486"
                                            // Animation: Continuous motion
                                            animate={{ pathLength: [0, 1, 0.5, 1], rotate: [0, -5, 0] }}
                                            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                                        />
                                    </g>
                                </g>
                                <g>
                                    <path style={{ fill: '#FBD131' }} d="M283.919,242.561c1.57,5.286,2.44,11.034,2.44,17.055c0,25.767-15.788,46.654-35.267,46.654c-19.475,0-35.265-20.888-35.265-46.654c0-6.021,0.872-11.769,2.441-17.055H283.919z" />
                                    <g>
                                        <g>
                                            <path style={{ fill: '#EF9B20' }} d="M272.783,273.448c0,1.402-1.186,2.538-2.649,2.538h-39.231c-1.462,0-2.648-1.136-2.648-2.538v-17.715c0-1.4,1.186-2.537,2.648-2.537h39.231c1.464,0,2.649,1.137,2.649,2.537V273.448z" />
                                            <path style={{ fill: '#29354A' }} d="M271.227,272.292c0,1.226-1.026,2.219-2.292,2.219h-36.837c-1.265,0-2.29-0.993-2.29-2.219v-15.4c0-1.227,1.026-2.22,2.29-2.22h36.837c1.266,0,2.292,0.993,2.292,2.22V272.292z" />
                                        </g>
                                        <g>
                                            <path style={{ fill: '#EF9B20' }} d="M239.305,279.899c0,0.919-0.743,1.661-1.661,1.661h-7.375c-0.919,0-1.663-0.742-1.663-1.661l0,0c0-0.919,0.744-1.664,1.663-1.664h7.375C238.561,278.235,239.305,278.98,239.305,279.899L239.305,279.899z" />
                                            <g>
                                                <path style={{ fill: '#EF9B20' }} d="M260.044,279.899c0,0.919-0.747,1.661-1.664,1.661s-1.661-0.742-1.661-1.661c0-0.919,0.744-1.664,1.661-1.664S260.044,278.98,260.044,279.899z" />
                                                <path style={{ fill: '#EF9B20' }} d="M266.467,279.899c0,0.919-0.746,1.661-1.663,1.661c-0.917,0-1.662-0.742-1.662-1.661c0-0.919,0.745-1.664,1.662-1.664C265.721,278.235,266.467,278.98,266.467,279.899z" />
                                                <path style={{ fill: '#EF9B20' }} d="M272.892,279.899c0,0.919-0.745,1.661-1.664,1.661c-0.918,0-1.663-0.742-1.663-1.661c0-0.919,0.745-1.664,1.663-1.664C272.146,278.235,272.892,278.98,272.892,279.899z" />
                                            </g>
                                        </g>
                                        <g>
                                            <path style={{ fill: '#FC2863' }} d="M256.506,264.592c0,3.306-2.681,5.988-5.987,5.988c-3.308,0-5.989-2.683-5.989-5.988c0-3.308,2.681-5.987,5.989-5.987C253.825,258.604,256.506,261.284,256.506,264.592z" />
                                            <path style={{ fill: '#FFFFFF' }} d="M249.07,267.47c-0.075,0-0.152-0.014-0.226-0.044c-0.176-0.076-0.287-0.233-0.287-0.405v-4.856c0-0.173,0.111-0.33,0.287-0.405c0.177-0.076,0.388-0.057,0.541,0.05l3.515,2.429c0.124,0.084,0.196,0.215,0.196,0.354c0,0.139-0.072,0.27-0.196,0.355l-3.515,2.428C249.293,267.439,249.182,267.47,249.07,267.47z" />
                                        </g>
                                    </g>
                                    <g>
                                        <path style={{ fill: '#EF9B20' }} d="M252.836,288.25c0,1.285-1.042,2.327-2.325,2.327c-1.286,0-2.327-1.042-2.327-2.327s1.041-2.326,2.327-2.326C251.794,285.924,252.836,286.965,252.836,288.25z" />
                                        <path style={{ fill: '#EF9B20' }} d="M253.27,248.409c0,1.285-1.042,2.327-2.327,2.327c-1.285,0-2.326-1.042-2.326-2.327c0-1.285,1.041-2.326,2.326-2.326C252.228,246.083,253.27,247.124,253.27,248.409z" />
                                        <path style={{ fill: '#EF9B20' }} d="M252.836,297.9c0,1.284-1.042,2.328-2.325,2.328c-1.286,0-2.327-1.044-2.327-2.328c0-1.284,1.041-2.327,2.327-2.327C251.794,295.573,252.836,296.616,252.836,297.9z" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </motion.g>

                    {/* Right Panel (Code Snippet/Data) - Changed fill from blue to dark maroon: #B91C1C and dots to #EFA0A0 */}
                    <motion.g
                        animate={{ y: [0, 3, 0] }}
                        transition={deviceFloatTransition}
                    >
                        <path style={{ fill: '#B91C1C' }} d="M436.019,234.741c0,3.156-2.559,5.716-5.716,5.716H318.855c-3.156,0-5.715-2.559-5.715-5.716v-74.768c0-3.156,2.559-5.716,5.715-5.716h111.448c3.157,0,5.716,2.56,5.716,5.716V234.741z" />
                        <g>
                            {/* Blinking Code Lines (Right Panel) */}
                            <motion.rect
                                x="379.517" y="210.936" style={{ fill: '#FBD131' }} width="41.957" height="3.06"
                                animate={{ opacity: [1, 0.2, 1] }} transition={blinkingTransition(randomDelay(0.5))}
                            />
                            <motion.rect
                                x="379.517" y="217.75" style={{ fill: '#083273' }} width="15.819" height="3.063"
                                animate={{ opacity: [1, 0.2, 1] }} transition={blinkingTransition(randomDelay(1.0))}
                            />
                            <motion.rect
                                x="399.207" y="217.75" style={{ fill: '#EFA0A0' }} width="24.813" height="3.063"
                                animate={{ opacity: [1, 0.2, 1] }} transition={blinkingTransition(randomDelay(0.3))}
                            />
                            <motion.rect
                                x="379.517" y="224.568" style={{ fill: '#083273' }} width="27.157" height="3.059"
                                animate={{ opacity: [1, 0.2, 1] }} transition={blinkingTransition(randomDelay(0.7))}
                            />
                        </g>
                        <path style={{ fill: '#EFA0A0' }} d="M426.144,183.523c0,2.58-2.092,4.671-4.671,4.671c-2.58,0-4.672-2.091-4.672-4.671c0-2.58,2.092-4.672,4.672-4.672C424.053,178.852,426.144,180.943,426.144,183.523z" /> {/* Changed #80A4FF */}
                        <path style={{ fill: '#FBD131' }} d="M332.334,168.995c0,2.58-2.092,4.671-4.671,4.671c-2.58,0-4.672-2.091-4.672-4.671c0-2.58,2.092-4.672,4.672-4.672C330.242,164.323,332.334,166.415,332.334,168.995z" />

                        {/* THE ROTATING GEAR 1 (Individual Rotation) */}
                        <motion.g
                            // Center Gear 1: White
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                            style={{ transformOrigin: '346.906px 204.734px' }}
                        >
                            <path style={{ fill: '#FFFFFF' }} d="M370.548,209.541v-9.656h-6.218c-0.398-1.438-0.972-2.805-1.695-4.074l4.401-4.4l-6.827-6.827l-4.405,4.404c-1.27-0.718-2.633-1.287-4.068-1.684v-6.231h-9.656v6.231c-1.436,0.396-2.8,0.966-4.069,1.684l-4.406-4.404l-6.826,6.827l4.4,4.4c-0.724,1.27-1.295,2.636-1.694,4.074h-6.217v9.656h6.205c0.395,1.444,0.967,2.814,1.689,4.089l-4.384,4.384l6.826,6.828l4.379-4.378c1.276,0.726,2.65,1.301,4.097,1.7v6.187h9.656v-6.187c1.446-0.399,2.818-0.975,4.096-1.7l4.378,4.378l6.827-6.828l-4.383-4.384c0.721-1.274,1.293-2.645,1.689-4.089H370.548z M346.906,213.308c-4.734,0-8.573-3.84-8.573-8.574c0-4.735,3.839-8.574,8.573-8.574c4.736,0,8.574,3.839,8.574,8.574C355.48,209.468,351.643,213.308,346.906,213.308z" />
                        </motion.g>
                        {/* THE ROTATING GEAR 2 (Individual Rotation) */}
                        <motion.g
                            // Center Gear 2: Red
                            animate={{ rotate: -360 }} // Rotate opposite direction
                            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                            style={{ transformOrigin: '383.159px 183.539px' }}
                        >
                            <path style={{ fill: '#FC2863' }} d="M400.009,186.965v-6.882h-4.432c-0.284-1.025-0.692-1.999-1.208-2.903l3.137-3.136l-4.866-4.866l-3.14,3.139c-0.904-0.512-1.876-0.917-2.899-1.199v-4.441h-6.882v4.441c-1.022,0.282-1.995,0.688-2.9,1.199l-3.141-3.139l-4.865,4.866l3.137,3.136c-0.517,0.904-0.924,1.878-1.208,2.903h-4.431v6.882h4.422c0.281,1.029,0.689,2.006,1.204,2.915l-3.124,3.123l4.865,4.867l3.121-3.12c0.909,0.517,1.889,0.927,2.919,1.211v4.409h6.882v-4.409c1.031-0.284,2.009-0.694,2.919-1.211l3.12,3.12l4.866-4.867l-3.124-3.123c0.514-0.909,0.922-1.886,1.204-2.915H400.009z M383.159,189.649c-3.374,0-6.11-2.736-6.11-6.11c0-3.375,2.736-6.111,6.11-6.111c3.376,0,6.111,2.736,6.111,6.111C389.27,186.913,386.535,189.649,383.159,189.649z" />
                        </motion.g>
                    </motion.g>

                    {/* Right Panel (Data Visualization) - Sequential Hover Animation for data bars */}
                    <motion.g
                        animate={{ y: [0, 3, 0] }}
                        transition={deviceFloatTransition}
                        initial="rest"
                        whileHover="hover"
                    >
                        <path style={{ fill: '#B91C1C' }} d="M436.019,350.343c0,3.156-2.559,5.715-5.716,5.715H318.855c-3.156,0-5.715-2.559-5.715-5.715v-74.77c0-3.156,2.559-5.715,5.715-5.715h111.448c3.157,0,5.716,2.559,5.716,5.715V350.343z" /> {/* Changed fill to dark maroon */}
                        <g>
                            <rect x="322.649" y="280.662" style={{ fill: '#FBD131' }} width="49.56" height="2.821" />

                            {/* Staggered Data Bars (WiFi Icon/Signal look) */}
                            <motion.rect custom={0} variants={dataBarVariants} x="322.649" y="286.941" style={{ fill: '#083273' }} width="18.686" height="2.823" /> {/* Bar 1 Blue */}
                            <motion.rect custom={1} variants={dataBarVariants} x="345.907" y="286.941" style={{ fill: '#EFA0A0' }} width="29.31" height="2.823" /> {/* Bar 2 Red */}
                            <motion.rect custom={2} variants={dataBarVariants} x="379.928" y="286.941" style={{ fill: '#EFA0A0' }} width="13.615" height="2.823" /> {/* Bar 3 Red */}
                            <motion.rect custom={3} variants={dataBarVariants} x="397.971" y="286.941" style={{ fill: '#EFA0A0' }} width="18.686" height="2.823" /> {/* Bar 4 Red */}

                            {/* Blinking Code Lines (Right Panel) */}
                            <motion.rect
                                x="358.176" y="293.228" style={{ fill: '#EFA0A0' }} width="27.748" height="2.819"
                                animate={{ opacity: [1, 0.2, 1] }} transition={blinkingTransition(randomDelay(0.9))}
                            />
                            <rect x="322.649" y="293.228" style={{ fill: '#083273' }} width="32.078" height="2.819" />
                            <rect x="322.649" y="334.774" style={{ fill: '#083273' }} width="18.686" height="2.819" />
                            <motion.rect
                                x="345.907" y="334.774" style={{ fill: '#EFA0A0' }} width="29.31" height="2.819"
                                animate={{ opacity: [1, 0.2, 1] }} transition={blinkingTransition(randomDelay(1.2))}
                            />
                            <rect x="358.176" y="341.057" style={{ fill: '#FBD131' }} width="11.868" height="2.82" />
                            <rect x="379.928" y="334.774" style={{ fill: '#EFA0A0' }} width="13.615" height="2.819" /> {/* Changed #80A4FF */}
                            <rect x="322.649" y="341.057" style={{ fill: '#FBD131' }} width="32.078" height="2.82" />
                            <rect x="332.503" y="303.868" style={{ fill: '#EFA0A0' }} width="18.687" height="2.822" /> {/* Changed #80A4FF */}
                            <motion.rect
                                x="355.76" y="303.868" style={{ fill: '#FBD131' }} width="17.664" height="2.822"
                                animate={{ opacity: [1, 0.2, 1] }} transition={blinkingTransition(randomDelay(0.4))}
                            />
                            <rect x="368.029" y="310.154" style={{ fill: '#EFA0A0' }} width="15.681" height="2.819" /> {/* Changed #80A4FF */}
                            <rect x="387.818" y="310.154" style={{ fill: '#EFA0A0' }} width="25.9" height="2.819" /> {/* Changed #80A4FF */}
                            <rect x="376.832" y="303.868" style={{ fill: '#FBD131' }} width="26.563" height="2.822" />
                            <rect x="332.503" y="316.267" style={{ fill: '#083273' }} width="18.687" height="2.82" />
                            <rect x="355.76" y="316.267" style={{ fill: '#EFA0A0' }} width="17.664" height="2.82" /> {/* Changed #80A4FF */}
                            <rect x="376.832" y="316.267" style={{ fill: '#EFA0A0' }} width="26.563" height="2.82" /> {/* Changed #80A4FF */}
                            <rect x="407.825" y="303.868" style={{ fill: '#EFA0A0' }} width="18.685" height="2.822" /> {/* Changed #80A4FF */}
                            <rect x="332.503" y="310.154" style={{ fill: '#083273' }} width="32.079" height="2.819" />
                            <rect x="379.858" y="325.455" style={{ fill: '#EFA0A0' }} width="15.68" height="2.821" /> {/* Changed #80A4FF */}
                            <rect x="344.333" y="325.455" style={{ fill: '#FBD131' }} width="32.079" height="2.821" />
                        </g>
                        <line style={{ fill: 'none', stroke: '#B91C1C', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: '5' }} points="322.649,309.463 284.952,309.463 284.952,282.148" /> {/* Changed stroke to dark maroon */}
                        <g>
                            <path style={{ fill: '#083273' }} d="M425.591,378.637c0,1.872-1.518,3.39-3.39,3.39h-66.104c-1.872,0-3.39-1.518-3.39-3.39v-44.349c0-1.872,1.518-3.39,3.39-3.39h66.104c1.872,0,3.39,1.518,3.39,3.39V378.637z" />
                            <path style={{ fill: '#FC2863' }} d="M392.46,368.819c0,1.828-1.483,3.311-3.312,3.311c-1.828,0-3.31-1.482-3.31-3.311c0-1.829,1.482-3.311,3.31-3.311C390.977,365.508,392.46,366.99,392.46,368.819z" />
                            <path style={{ fill: '#FFFFFF' }} d="M408.778,348.293c-2.527-2.599-5.488-4.642-8.798-6.073c-3.429-1.482-7.072-2.233-10.832-2.233c-3.759,0-7.402,0.751-10.831,2.233c-3.311,1.432-6.27,3.475-8.798,6.073l-0.334,0.344l0.343,0.334l2.577,2.505l0.343,0.334l0.333-0.344c4.345-4.466,10.158-6.926,16.367-6.926c6.21,0,12.023,2.46,16.367,6.926l0.334,0.344l0.344-0.334l2.576-2.505l0.342-0.334L408.778,348.293z" />
                            <path style={{ fill: '#FFFFFF' }} d="M389.148,356.84c-3.255,0-6.302,1.291-8.581,3.634l-0.334,0.343l0.343,0.335l2.575,2.505l0.345,0.333l0.334-0.343c1.413-1.452,3.302-2.253,5.318-2.253c2.018,0,3.906,0.801,5.319,2.253l0.334,0.343l0.344-0.333l2.575-2.505l0.345-0.335l-0.335-0.343C395.451,358.131,392.403,356.84,389.148,356.84z" />
                            <path style={{ fill: '#FFFFFF' }} d="M389.148,348.533c-5.317,0-10.294,2.108-14.017,5.935l-0.335,0.344l0.345,0.334l2.575,2.505l0.344,0.334l0.334-0.344c2.856-2.936,6.677-4.554,10.755-4.554c4.079,0,7.898,1.617,10.757,4.554l0.333,0.344l0.344-0.334l2.575-2.505l0.344-0.334l-0.334-0.344C399.444,350.642,394.466,348.533,389.148,348.533z" />
                        </g>
                    </motion.g>

                    {/* Left Panel (Code Editor/Input) - Blinking Code Lines */}
                    <motion.g
                        animate={{ y: [0, 3, 0] }}
                        transition={deviceFloatTransition}
                    >
                        <path style={{ fill: '#B91C1C' }} d="M194.424,234.741c0,3.156-2.559,5.716-5.716,5.716H77.26c-3.156,0-5.715-2.559-5.715-5.716v-74.768c0-3.156,2.559-5.716,5.715-5.716h111.448c3.157,0,5.716,2.56,5.716,5.716V234.741z" /> {/* Changed fill to dark maroon */}
                        <g>
                            <path style={{ fill: '#FBD131' }} d="M110.338,167.576v22.177h22.176C132.514,177.506,122.585,167.576,110.338,167.576z" />
                            <path style={{ fill: '#FC2863' }} d="M107.286,167.576c-13.933,0-25.229,11.295-25.229,25.229c0,13.934,11.295,25.229,25.229,25.229c13.934,0,25.229-11.295,25.229-25.229h-25.229V167.576z" />
                        </g>
                        <g>
                            {/* Blinking Code Lines (Left Panel) */}
                            <motion.rect
                                x="140.826" y="178.473" style={{ fill: '#FBD131' }} width="41.957" height="3.06"
                                animate={{ opacity: [1, 0.2, 1] }} transition={blinkingTransition(randomDelay(0.5))}
                            />
                            <motion.rect
                                x="140.826" y="185.286" style={{ fill: '#083273' }} width="15.819" height="3.063"
                                animate={{ opacity: [1, 0.2, 1] }} transition={blinkingTransition(randomDelay(1.0))}
                            />
                            <motion.rect
                                x="160.517" y="185.286" style={{ fill: '#EFA0A0' }} width="24.813" height="3.063"
                                animate={{ opacity: [1, 0.2, 1] }} transition={blinkingTransition(randomDelay(0.3))}
                            />
                            <motion.rect
                                x="140.826" y="192.105" style={{ fill: '#083273' }} width="27.157" height="3.059"
                                animate={{ opacity: [1, 0.2, 1] }} transition={blinkingTransition(randomDelay(0.7))}
                            />
                        </g>
                        <path style={{ fill: '#FC2863' }} d="M180.44,221.576c0,2.58-2.092,4.671-4.671,4.671c-2.58,0-4.672-2.091-4.672-4.671c0-2.58,2.092-4.672,4.672-4.672C178.348,216.904,180.44,218.996,180.44,221.576z" />
                        <g>
                            <line style={{ fill: 'none', stroke: '#B91C1C', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="189.091" y1="170.37" x2="191.591" y2="170.37" /> {/* Changed stroke to dark maroon */}
                            <line style={{ fill: 'none', stroke: '#B91C1C', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', strokeDasharray: '3.111,3.111' }} x1="194.702" y1="170.37" x2="199.368" y2="170.37" /> {/* Changed stroke to dark maroon */}
                            <polyline style={{ fill: 'none', stroke: '#B91C1C', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} points="200.924,170.37 203.424,170.37 203.424,172.87" /> {/* Changed stroke to dark maroon */}
                            <line style={{ fill: 'none', stroke: '#B91C1C', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', strokeDasharray: '4.8623,4.8623' }} x1="203.424" y1="177.732" x2="203.424" y2="204.475" /> {/* Changed stroke to dark maroon */}
                            <polyline style={{ fill: 'none', stroke: '#B91C1C', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} points="203.424,206.906 203.424,209.406 205.924,209.406" /> {/* Changed stroke to dark maroon */}
                            <line style={{ fill: 'none', stroke: '#B91C1C', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="207.571" y1="209.406" x2="210.071" y2="209.406" /> {/* Changed stroke to dark maroon */}
                        </g>
                        <g>
                            <path
                                fill="#083273"
                                d="M160.793,256.347c0,1.873-1.518,3.391-3.39,3.391H91.299
                                c-1.872,0-3.39-1.518-3.39-3.391v-44.349c0-1.872,1.518-3.39,3.39-3.39h66.104
                                c1.872,0,3.39,1.518,3.39,3.39V256.347z"
                            />
                            <motion.text
                                x="123.29"
                                y="237.56"
                                {...codeIconStyle}
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={pulseTransition}
                                textAnchor="middle"
                                alignmentBaseline="middle"
                                fontWeight="bold"
                            >
                                {"</>"}
                            </motion.text>
                        </g>
                    </motion.g>

                    {/* Left Bottom Panel (Server/Database) - Robot Eye Rotation on hover */}
                    <motion.g
                        animate={{ y: [0, 3, 0] }}
                        transition={deviceFloatTransition}
                    >
                        <g id="XMLID_101_">
                            <path id="XMLID_99_" style={{ fill: '#FBD131' }} d="M123.725,321.933h68.678c9.266,0,16.838,7.573,16.838,16.839v47.235c0,9.249-7.573,16.822-16.838,16.822h-68.678c-9.266,0-16.838-7.573-16.838-16.822v-47.235C106.887,329.506,114.459,321.933,123.725,321.933L123.725,321.933z" />
                            <g id="XMLID_91_">
                                <rect id="XMLID_96_" x="205.039" y="381.788" style={{ fill: '#AE825E' }} width="9.497" height="7.881" />
                                <rect id="XMLID_95_" x="101.331" y="381.788" style={{ fill: '#AE825E' }} width="9.496" height="7.881" />
                            </g>
                            <g id="XMLID_100_">
                                <path id="XMLID_94_" style={{ fill: '#AE825E' }} d="M108.519,415.05h2.847c1.354,0,2.447,1.107,2.447,2.446v6.372c0,1.354-1.093,2.447-2.447,2.447h-2.847c-1.339,0-2.447-1.094-2.447-2.447v-6.372C106.071,416.157,107.179,415.05,108.519,415.05L108.519,415.05z" />
                                <path id="XMLID_93_" style={{ fill: '#AE825E' }} d="M201.361,415.05h2.862c1.339,0,2.433,1.107,2.433,2.446v6.372c0,1.354-1.094,2.447-2.433,2.447h-2.862c-1.339,0-2.431-1.094-2.431-2.447v-6.372C198.93,416.157,200.022,415.05,201.361,415.05L201.361,415.05z" />
                            </g>
                            <path id="XMLID_92_" style={{ fill: '#F2B01E' }} d="M103.639,387.637h106.956c5.079,0,9.236,4.141,9.236,9.22v11.404c0,5.079-4.157,9.235-9.236,9.235H103.639c-5.079,0-9.234-4.156-9.234-9.235v-11.404C94.405,391.777,98.56,387.637,103.639,387.637L103.639,387.637z" />
                            <g id="XMLID_90_">
                                <path id="XMLID_98_" style={{ fill: '#F2B01E' }} d="M101.731,355.593h8.696c3.124,0,5.694,2.571,5.694,5.71v16.284c0,3.14-2.57,5.695-5.694,5.695h-8.696c-3.14,0-5.694-2.556-5.694-5.695v-16.284C96.037,358.164,98.591,355.593,101.731,355.593L101.731,355.593z" />
                                <path id="XMLID_97_" style={{ fill: '#F2B01E' }} d="M205.44,355.593h8.679c3.141,0,5.711,2.571,5.711,5.71v16.284c0,3.14-2.571,5.695-5.711,5.695h-8.679c-3.141,0-5.695-2.556-5.695-5.695v-16.284C199.746,358.164,202.3,355.593,205.44,355.593L205.44,355.593z" />
                            </g>
                        </g>
                        <path style={{ fill: '#825936' }} d="M140.339,375.581c0,2.182,1.809,3.954,4.042,3.954h20.859c2.234,0,4.044-1.772,4.044-3.954v-7.411c0-2.186-1.811-3.951-4.044-3.951h-20.859c-2.233,0-4.042,1.765-4.042,3.951V375.581z" />
                        <g>
                            <rect x="148.308" y="319.313" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 309.7436 642.4912)" style={{ fill: '#DC8A6E' }} width="13.127" height="3.866" />
                            <g>
                                <g>
                                    <path style={{ fill: '#FC2863' }} d="M171.31,325.963l-9.796-2.784H148.15l-9.202,3.103l2.839,23.475c-0.493,10.736-2.839,17.961-2.839,17.961l14.581,6.657l10.412-1.01l6.338-4.623v-14.456l0,0c0.596-5.048,1.618-13.455,2.173-16.622C173.268,333.011,171.31,325.963,171.31,325.963z" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path style={{ fill: '#DC8A6E' }} d="M143.039,302.764c0,2.429-1.967,4.398-4.393,4.398c-2.426,0-4.393-1.97-4.393-4.398c0-2.426,1.967-4.394,4.393-4.394C141.072,298.37,143.039,300.338,143.039,302.764z" />
                                        <path style={{ fill: '#DC8A6E' }} d="M175.492,302.764c0,2.429-1.969,4.398-4.395,4.398c-2.427,0-4.396-1.97-4.396-4.398c0-2.426,1.968-4.394,4.396-4.394C173.522,298.37,175.492,300.338,175.492,302.764z" />
                                        <path style={{ fill: '#E5AB81' }} d="M171.437,303.106c0,10-7.416,18.104-16.565,18.104c-9.149,0-16.565-8.104-16.565-18.104c0-10.001,7.417-18.106,16.565-18.106C164.021,285,171.437,293.105,171.437,303.106z" />
                                    </g>
                                    <g>
                                        <path style={{ fill: '#29354A' }} d="M172.608,287.025c0,0-2.085-4.82-6.252-1.666c-4.168,3.155,2.513,19.024,5.399,17.574C174.64,301.487,174.254,292.917,172.608,287.025z" />
                                        <path style={{ fill: '#29354A' }} d="M143.325,289.391c0,0-3.1-6.544,1.388-11.451c4.486-4.907,20.359-7.166,23.19-8.977c2.695-1.725,4.171,3.834,0.321,11.547c0.838-0.357,4.664-3.988,3.455,2.571c-1.046,5.671-8.157,11.686-13.393,12.506C153.048,296.402,145.888,295.117,143.325,289.391z" />
                                        <path style={{ fill: '#29354A' }} d="M137.446,287.025c0,0-2.083-4.82,6.252-1.666c4.168,3.155-2.512,19.024-5.4,17.574C135.415,301.487,135.799,292.917,137.446,287.025z" />
                                    </g>
                                </g>
                                {/* Robot Face/Eye Group - Rotates 360 on hover */}
                                <motion.g
                                    whileHover={{ rotate: 360, transition: { repeat: Infinity, duration: 1.5, ease: "linear" } }}
                                    style={{ transformOrigin: '155px 303px' }}
                                >
                                    <path style={{ fill: '#29354A' }} d="M149.509,305.232c0,1.371-0.701,2.482-1.565,2.482c-0.864,0-1.566-1.111-1.566-2.482s0.702-2.481,1.566-2.481C148.808,302.751,149.509,303.861,149.509,305.232z" />
                                    <path style={{ fill: '#29354A' }} d="M163.521,305.232c0,1.371-0.702,2.482-1.566,2.482c-0.864,0-1.566-1.111-1.566-2.482s0.701-2.481,1.566-2.481C162.82,302.751,163.521,303.861,163.521,305.232z" />
                                    <path style={{ fill: '#DC8A6E' }} d="M154.891,311.448c0.865,0,1.565-0.701,1.565-1.565h-3.13C153.326,310.747,154.027,311.448,154.891,311.448z" />
                                    <path style={{ fill: 'none', stroke: '#29354A', strokeWidth: '1.0437', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }} d="M145.229,300.857c0,0,2.714-2.544,5.703,0" />
                                    <path style={{ fill: 'none', stroke: '#29354A', strokeWidth: '1.0437', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }} d="M164.993,300.857c0,0-2.715-2.544-5.704,0" />
                                    <path style={{ fill: 'none', stroke: '#FF4462', strokeWidth: '0.5835', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }} d="M157.744,313.467c0,0-2.715,2.544-5.704,0" />
                                </motion.g>
                            </g>
                            <g>
                                <g>
                                    <path style={{ fill: '#E5AB81' }} d="M159.543,349.94c0,0-9.069-0.393-9.754,0.765c-0.687,1.161-1.02,3.514-0.706,4.852c0.317,1.33,2.367,3.58,3.697,3.688c1.325,0.11,2.173,0.059,2.173,0.059s0.487-0.243-0.741-1.059c-1.227-0.818,4.729,0.691,6.325-1.083C160.538,357.16,161.412,352.024,159.543,349.94z" />
                                    <g>
                                        <path style={{ fill: '#E5AB81' }} d="M155.126,357.982c0.013,0.009,0.019,0.012,0.029,0.022c1.267,0.067,3.338,0.215,4.626-0.332C157.477,358.099,154.184,357.358,155.126,357.982z" />
                                    </g>
                                </g>
                                <path style={{ fill: '#E5AB81' }} d="M173.092,327.537c-1.444-1.678-3.984-1.878-5.686-0.456c-1.699,1.421-1.91,3.94-0.476,5.625c0.07,0.082,5.925,7.901,6.951,17.201h-14.597v7.988h18.734c2.141,0,3.912-1.652,4.031-3.765C182.873,339.911,173.506,328.02,173.092,327.537z" />
                            </g>
                            <g>
                                <g>
                                    <path style={{ fill: '#E5AB81' }} d="M151.563,350.034c0,0,9.107-0.396,9.796,0.771c0.69,1.165,1.023,3.525,0.707,4.867c-0.316,1.34-2.377,3.597-3.709,3.708c-1.334,0.106-2.184,0.058-2.184,0.058s-0.491-0.244,0.743-1.065c1.232-0.82-4.749,0.694-6.347-1.085C150.569,357.289,149.687,352.127,151.563,350.034z" />
                                </g>
                                <path style={{ fill: '#E5AB81' }} d="M137.524,327.713c1.443-1.681,3.982-1.881,5.682-0.46c1.702,1.424,1.911,3.943,0.478,5.629c-0.071,0.081-5.563,7.726-6.585,17.025l14.596,0.123v7.865h-18.736c-2.142,0-3.91-1.652-4.033-3.765C128.106,339.911,137.107,328.195,137.524,327.713z" />
                            </g>
                            <path style={{ fill: '#FC2863' }} d="M141.104,325.497c0,0-4.216,0.298-7.706,6.963l-4.526,9.66l10.982,2.677c0,0,6.073-10.861,5.334-15.547C144.447,324.567,141.104,325.497,141.104,325.497z" />
                            <path style={{ fill: '#FC2863' }} d="M169.725,325.629c0,0,4.4-0.075,7.71,6.966l4.071,7.07l-9.777,4.874c0,0-6.829-10.467-6.089-15.155C166.381,324.699,169.725,325.629,169.725,325.629z" />
                            <g>
                                <path style={{ fill: '#29354A' }} d="M177.533,365.774h-42.521c-0.821,0-1.486-0.664-1.486-1.481v-24.84c0-0.819,0.664-1.483,1.486-1.483h42.521c0.823,0,1.488,0.664,1.488,1.483v24.84C179.021,365.11,178.356,365.774,177.533,365.774z" />
                                <path style={{ fill: '#222D3D' }} d="M132.54,365.524v1.909c0,1.046,0.944,1.904,2.095,1.904h43.278c1.151,0,2.094-0.858,2.094-1.904v-1.909H132.54z" />
                            </g>
                            <g>
                                <path style={{ fill: '#A3724F' }} d="M135.799,379.677l38.736-12.155c3.193-1.003,6.753,1.282,7.953,5.101c1.197,3.814-0.42,7.725-3.615,8.726l-38.736,12.154L135.799,379.677z" />
                                <rect x="137.863" y="378.658" transform="matrix(0.9541 -0.2994 0.2994 0.9541 -109.1169 59.6702)" style={{ fill: '#825936' }} width="4.586" height="14.491" />
                                <g>
                                    <path style={{ fill: '#222D3D' }} d="M140.129,393.474l-6.708,2.103c-0.638,0.199-1.351-0.256-1.589-1.023l-3.227-10.283c-0.242-0.768,0.083-1.551,0.72-1.748l6.706-2.105L140.129,393.474z" />
                                    <path style={{ fill: '#29354A' }} d="M142.183,390.103c1.736,5.53-1.407,11.445-7.022,13.206l-6.286-20.032C134.491,381.517,140.448,384.572,142.183,390.103z" />
                                    <path style={{ fill: '#FFFFFF' }} d="M126.031,382.813c-0.566,0.178-0.877,0.798-0.695,1.387l6.389,20.359c0.186,0.59,0.795,0.923,1.362,0.747l2.027-0.637c-0.565-0.179-0.873-0.799-0.691-1.386l-6.388-20.362c-0.186-0.587-0.796-0.92-1.362-0.744L126.031,382.813z" />
                                </g>
                                <g>
                                    <path style={{ fill: '#AE825E' }} d="M174.185,393.356l-38.834-11.837c-3.201-0.976-4.85-4.872-3.683-8.699c1.167-3.827,4.707-6.141,7.909-5.165l38.835,11.838L174.185,393.356z" />
                                    <rect x="166.859" y="383.464" transform="matrix(0.2915 -0.9566 0.9566 0.2915 -245.6524 439.8314)" style={{ fill: '#825936' }} width="14.493" height="4.585" />
                                    <g>
                                        <path style={{ fill: '#222D3D' }} d="M174.185,393.356l6.725,2.049c0.64,0.196,1.348-0.271,1.584-1.038l3.141-10.309c0.235-0.767-0.096-1.548-0.736-1.743l-6.722-2.05L174.185,393.356z" />
                                        <path style={{ fill: '#29354A' }} d="M172.104,390.004c-1.691,5.547,1.502,11.432,7.131,13.149l6.121-20.084C179.727,381.355,173.794,384.46,172.104,390.004z" />
                                        <path style={{ fill: '#FFFFFF' }} d="M188.197,382.582c0.568,0.173,0.882,0.792,0.705,1.383l-6.223,20.411c-0.179,0.591-0.786,0.93-1.354,0.755l-2.03-0.62c-0.568-0.173-0.884-0.793-0.705-1.382l6.222-20.412c0.18-0.589,0.786-0.925,1.356-0.753L188.197,382.582z" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </motion.g>
                </motion.g>
            </g>
        </motion.svg>
    );
};

export default NlpIcon;
