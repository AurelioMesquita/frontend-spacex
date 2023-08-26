export const StatusAtivo = [
  { id: true, status: "SUCESSO", background: "#6DBD2E", color: "#FFF" },
  { id: false, status: "FALHA", background: "#9F1717", color: "#FFF" },
];

export const selectedResult = status => {
  let selected = StatusAtivo.find(e => e.id === status);
  console.log(selected);
  return (
    <div
      style={{
        backgroundColor: selected && selected.background,
        color: selected && selected.color,
        borderRadius: 3,
        padding: "5px 10px",
        width: "100%",
      }}
    >
      {selected && selected.status}
    </div>
  );
};
