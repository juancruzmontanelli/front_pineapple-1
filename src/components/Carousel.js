// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: 'Las mejores marcas',
//     imgPath:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAAzjR0_IoTZO2O2mw9ZGdG4wh3GEvvVqSvqVbh2VbRF_gxREfnb-ywRMKWJSKZSnrB4&usqp=CAU"
//   },
//   {
//     label: 'Tecnología',
//     imgPath:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0MuLTXvBEWax4FxdrIyt--a88iq1sL7FuQ&usqp=CAU',
//   },
//   {
//     label: 'Servicio 24hs',
//     imgPath:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwzUM_gn-LNRv2Ev7FrAow9EapfmCltFqDpA&usqp=CAU',
//   },
//   {
//     label: 'Especialización',
//     imgPath:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR80ZV4ZEFLjgw4FbaIx8YFEVICOSR4Y0FO6Q&usqp=CAU',
//   },
// ];

// function SwipeableTextMobileStepper() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           height: 100,
//           pl: 2,
//           bgcolor: '#ed7203',
//           margin: 1,
//           justifyContent:"center"
        
//         }}
//       >
//         <Typography variant="h4" fontWeight="bold" textTransform="uppercase" textAlign="center" >{images[activeStep].label}</Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   height: 255,
//                   display: 'block',
//                   maxWidth: 800,
//                   overflow: 'hidden',
//                   width: '100%',
//                 }}
//                 src={step.imgPath}
//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             Next
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//   );
// }

// export default SwipeableTextMobileStepper;
