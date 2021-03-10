import React from 'react';
import { Text, FlatList } from 'react-native';
import {useSelector} from "react-redux"
import BookSearch from "../../components/bookSearch"

export default function search(navigation) {
  const books = useSelector((state) => state.books)
 return (
  <>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (       
            <BookSearch
              item = {item}                
            />
        )}
       
      />
  </>
  );
}