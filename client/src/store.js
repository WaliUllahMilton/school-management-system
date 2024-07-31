import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './slices/admin/adminSlice'

export const store = configureStore({
                    
            reducer : {
                admins : adminReducer
            }
})