import streamlit as st

st.set_page_config(page_title="Red Diamond OS", layout="wide")

st.title("💎 Red Diamond OS - Command Center")

col1, col2, col3 = st.columns(3)

with col1:
    st.metric("Lead Status", "Active", "4 New")
    
with col2:
    st.metric("Agent Pulse", "Online", "49/49")

with col3:
    st.metric("System Load", "Stable", "i7-8700")

st.write("### Pending Approvals")
st.info("No leads currently awaiting manual gate approval.")
