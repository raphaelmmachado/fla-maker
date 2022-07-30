function Options({formationState}) {
  return (
    <>
      <select onChange={(e)=> formationState(e.target.value)} name="formation" id="formation">
        <option value="fourfourtwo">4-4-2</option>
        <option value="fourthreethree">4-3-3</option>
        <option value="threefivetwo">3-5-2</option>
      </select>
    </>
  );
}
export { Options };
