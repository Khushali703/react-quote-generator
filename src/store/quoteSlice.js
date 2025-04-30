import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const FetchQuote = createAsyncThunk("quote/FetchQuote",async()=> { 
    const api = 'https://dummyjson.com/quotes';
    const response = await axios.get(api);   


    const randomQuote = Math.floor(Math.random() * response.data.quotes.length);
  
    const quoteObject = response.data.quotes[randomQuote];
        const data1 = {
            id: quoteObject.id,
            text: quoteObject.quote,
            author: quoteObject.author,
        };  
        return data1;
    
});


const QuoteSlice = createSlice({
    name:'quote',
    initialState:{
        quote : {
            text : "",
            author:"",
        },
        favorites : [],
         status: "idle",  //loading
    },

    reducers : {
        addToFav: (state, action) =>{
            // state.favorites.push(action.payload);
            if (!state.favorites.some((q) => q.text === action.payload.text)) {
                state.favorites.push(action.payload);
              }
        },
        removeFromFav : (state , action) => {
            state.favorites =  state.favorites.filter(quoteId => quoteId.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(FetchQuote.pending, (state) => {
            state.status = "loading";
          })
          .addCase(FetchQuote.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.quote = action.payload; 
          })
          .addCase(FetchQuote.rejected, (state) => {
            state.status = "failed";
          });
      },
});

export const quoteActions = QuoteSlice.actions;

export default QuoteSlice;