import { configureStore } from "@reduxjs/toolkit";

import TestimonialsSlice from "./slices/TestimonailsSlice";

export const store = configureStore({
    reducer: {

        testimonials: TestimonialsSlice,

    },
});