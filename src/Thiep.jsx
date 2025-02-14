import React, { useState } from "react";
import { motion } from "framer-motion";
export const GreetingCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
                position: "absolute",
                bottom: "60%",
                left: "39%",
                transform: "translateX(-50%)",
                backgroundColor: "#ffb8c6",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                color: "white",
            }}
        >
            <h2 style={{ textAlign: 'center', fontFamily: 'cursive' }}>
                Happy Valentine's Day</h2>
            <p style={{ fontFamily: 'revert-layer', textAlign: 'center' }}>Vanlentine's thứ 3 zòi, yêu em kkk ❣️❣️❣️</p>
        </motion.div>
    );
};