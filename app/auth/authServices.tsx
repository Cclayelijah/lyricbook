// src/auth/authContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import supabase from '@supabase/supabase-js';
import User from '../models/user';

interface AuthContextType {
  user: any; // Substitua pelo tipo de usuário que você espera
  loading: boolean;
  signIn: (user: User) => Promise<void>;
  signUp: (user: User) => Promise<void>;
  signOut: () => Promise<void>;
}


const AuthContext = createContext< AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>(); 
    const [loading, setLoading] = useState<boolean>(true);
    
    const signIn = async (user: User) => {
        
    };

    const signUp = async (user: User) => {
        
    };

    const signOut = async () => {
        
    };

    const contextValue: AuthContextType = {
        user,
        loading,
        signIn,
        signUp,
        signOut,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
    
};