import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './slices/admin/adminSlice'
import studentReducer from './slices/student/studentSlice'
export const store = configureStore({
                    
            reducer : {
                admin : adminReducer,
                student : studentReducer
            }
})