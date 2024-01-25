import Title from "../modify/Title";

const ExpertsIntroduction = () => {
  return (
    <>
      <Title text={"Beauty consulting experts"} />
      <div style={{ position: "relative", width: "317px", height: "418px" }}>
        <img
          style={{
            position: "absolute",
            zIndex: 1,
            top: 0, 
            left: 0, 
          }}
          src="src/assets/BIBI.png"
        />
        <div
          style={{
            width: "195px",
            height: "307px",
            background: "#F6F6F6",
            borderTopRightRadius: 100,
            position: "absolute",
            top: 100,
            left: 100,
            zIndex: 0,
          }}
        />

        <div
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 30,
            fontFamily: "Lexend Deca",
            fontWeight: "400",
            lineHeight: 30,
            wordWrap: "break-word",
            position: "absolute",
            bottom: -180, 
            left: 450, 
          }}
        >
          BIBI
        </div>
      </div>
    </>
  );
};

export default ExpertsIntroduction;
