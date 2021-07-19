import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FeaturedSmall from '../featured/FeaturedSmall';
import useMedia from 'use-media';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "white",
    },
    tab: {
        backgroundColor: "#d4e9e2",
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export default function Tablist({ tabLists, tabs }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const isMobile = useMedia({ maxWidth: '426px' });

    const StyledTabs = withStyles({
        indicator: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'red',
            '& > span': {
                width: '100%',
                backgroundColor: '#008248',
            },
        },
    })((props) => !isMobile ?
        <Tabs {...props} centered TabIndicatorProps={{ children: <span /> }} />
        :
        <Tabs {...props} variant="scrollable" TabIndicatorProps={{ children: <span /> }} />);


    return (
        <div className={classes.root}>
            <StyledTabs value={value} onChange={handleChange} aria-label="simple tabs example"
                scrollButtons="auto"
            >
                {tabLists.map((tab, index) =>
                    <Tab key={index} label={tab} disableRipple {...a11yProps(index)} />
                )}
            </StyledTabs>
            <div className={classes.tab}>
                {
                    tabs.map((tab, index) =>
                        <TabPanel key={index} value={value} index={index}>
                            <FeaturedSmall
                                title={tab.heading}
                                info={tab.paragraph}
                                image={tab.image}
                                order='2'
                            />
                        </TabPanel>
                    )
                }
            </div>
        </div >
    );
}