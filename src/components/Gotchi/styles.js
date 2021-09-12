
import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    gotchi: {
        display: 'block',
        borderRadius: theme.shape.borderRadius,
        color: '#fff',
        padding: '24px 12px 16px',
        textAlign: 'center',
        height: '100%',
        position: 'relative',
        '&:hover': {
            textDecoration: 'none'
        },
    },
    owner: {
        display: 'block',
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.common.white,
        fontSize: 12,
        fontWeight: 'bold',
        padding: '0 4px',
        position: 'relative',
        textDecoration: 'none',
        opacity: .9,
        '&:hover': {
            textDecoration: 'none',
            opacity: 1
        }
    },
    gotchiSvg: {
        width: 120,
        margin: 'auto',
        '& .gotchi-wearable': {
            transition: 'all .5s ease-in-out'
        },
        '& .gotchi-sleeves': {
            transition: 'all .5s ease-in-out'
        },
        '&:hover': {
            '& .gotchi-wearable:not(.wearable-bg)': {
                opacity: 0,
            },
            '& .gotchi-sleeves': {
                opacity: 0,
            },
            '& .wearable-head': {
                transform: 'translateY(-5px) rotateZ(-45deg)'
            },
            '& .wearable-eyes': {
                transform: 'translateX(10px) rotateZ(5deg)'
            },
            '& .wearable-face': {
                transform: 'translateX(-10px) rotateZ(10deg)'
            },
            '& .wearable-body': {
                transform: 'translateY(10px) rotateZ(-5deg)'
            },
            '& .wearable-hand-right': {
                transform: 'translateX(5px) rotateZ(-5deg)'
            },
            '& .wearable-hand-left': {
                transform: 'translateX(-5px) rotateZ(5deg)'
            },
            '& .wearable-pet': {
                transform: 'translateY(5px)'
            }
        }
    },
    gotchiInnerSection: {
        marginTop: 8
    },
    gotchiOwner: {
        position: 'absolute',
        minWidth: 60,
        top: 0,
        right: '50%',
        transform: 'translate(50%, -50%)',
        color: '#fff'
    },
    gotchiLvlWrapper: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    gotchiLvl: {
        display: 'inline-flex',
        position: 'relative',
        backgroundColor: fade(theme.palette.primary.main, .1),
        borderRadius: '50%',
        cursor: 'default'
    },
    gotchiLvlInner: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        inset: 0
    },
    gotchiLvlPopover: {
        pointerEvents: 'none'
    },
    gotchiLvlPopoverInner: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: '4px 8px'
    },
    gotchiName: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: 15
    },
    gotchiTraits: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        minHeight: 26
    },
    gotchiTraitsInner: {
        textAlign: 'center',
        flexBasis: '49%',
        margin: '2px 0'
    },
    gotchiWLineWrapper: {
        height: 16,
        display: 'flex',
        alignItems: 'center'
    },
    gotchiWLineItem: {
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: '100%',
        backgroundColor: '#e3e3e3',
        height: 8,
        position: 'relative',
        margin: '0 0.5px',
        transition: 'all .1s ease-in-out',
        '&:first-child': {
            borderTopLeftRadius: theme.shape.borderRadiusSmaller,
            borderBottomLeftRadius: theme.shape.borderRadiusSmaller
        },
        '&:last-child': {
            borderTopRightRadius: theme.shape.borderRadiusSmaller,
            borderBottomRightRadius: theme.shape.borderRadiusSmaller
        },
        '&:hover': {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            height: 16,
            flexBasis: '25%',
            '& .popover-core': {
                opacity: 1,
                pointerEvents: 'all'
            },
            '& .name': {
                opacity: '1 !important'
            }
        }
    },
    gotchiWLinePopover: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e3e3e3',
        borderRadius: theme.shape.borderRadiusSmaller,
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        opacity: 0,
        padding: 4,
        pointerEvents: 'none',
        height: 65,
        width: 65,
        textDecoration: 'none',
        transform: 'translateX(-50%)',
        transition: 'opacity .2s ease-in-out'
    },
    gotchiWLinePopoverName: {
        position: 'absolute',
        right: 0,
        bottom: -1,
        left: 0,
        pointerEvents: 'none',
        fontSize: 13,
        fontWeight: 'bold',
        color: theme.palette.secondary.main,
        whiteSpace: 'nowrap',
        opacity: 0,
        transition: 'opacity .2s ease-in-out'
    },
    gotchiWLinePopoverEmpty: {
        fontWeight: 'bold',
        color: theme.palette.secondary.main
    },
    gotchiWLineLink: {
        display: 'block',
        height: '100%',
        textDecoration: 'none !important',
    },
    // gotchiWLineIcon: {
    //     color: theme.palette.secondary.main
    // },
    callMadeIcon: {
        position: 'absolute',
        right: 2,
        bottom: 2,
        fontSize: 14
    },
    tokenValue: {
        display: 'inline-flex',
        alignItems: 'center'
    },
    mainVal: {
        fontSize: 13
    },
    defaultVal: {
        fontSize: 10,
        marginLeft: 2
    }
}));