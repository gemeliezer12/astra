function App({images}) {

    const ImageGrid = () => {
        switch (images.length) {
            case 1: 
                return (
                    <div style={{
                        width: '100%',
                        display: "flex",
                        gap: "2px",
                        borderRadius: "20px",
                        overflow: "hidden"
                    }}>
                        <div style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2px"
                        }}>
                            <div style={{
                                height: "100%",
                                overflow: "hidden",
                            }}>
                                <img src={`images/${images[0]}`} alt="" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}/>
                            </div>
                            
                        </div>
                    </div>
                )
            case 2: 
                return (
                    <div style={{
                        width: '100%',
                        display: "flex",
                        gap: "2px",
                        borderRadius: "20px",
                        overflow: "hidden"
                    }}>
                        <div style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2px"
                        }}>
                            <div style={{
                                height: "100%",
                                aspectRatio: "1/1",
                                overflow: "hidden",
                            }}>
                                <img src={`images/${images[0]}`} alt="" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}/>
                            </div>
                            
                        </div>
                        <div style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2px"
                        }}>
                           <div style={{
                                height: "100%",
                                aspectRatio: "1/1",
                                overflow: "hidden",
                            }}>
                                <img src={`images/${images[1]}`} alt="" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}/>
                            </div>
                        </div>
                    </div>
                )
            case 3: 
                return (
                    <div style={{
                        width: '100%',
                        display: "flex",
                        gap: "2px",
                        borderRadius: "20px",
                        overflow: "hidden"
                    }}>
                        <div style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2px"
                        }}>
                            <div style={{
                                height: "100%",
                                aspectRatio: "16/9",
                                overflow: "hidden",
                            }}>
                                <img src={`images/${images[0]}`} alt="" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}/>
                            </div>
                            
                        </div>
                        <div style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2px"
                        }}>
                           <div style={{
                                height: "50%",
                                aspectRatio: "16/9",
                                overflow: "hidden",
                            }}>
                                <img src={`images/${images[1]}`} alt="" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}/>
                            </div> 
                            <div style={{
                                height: "50%",
                                aspectRatio: "16/9",
                                overflow: "hidden",
                            }}>
                                <img src={`images/${images[2]}`} alt="" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}/>
                            </div>
                        </div>
                    </div>
                )
            case 4:
                return (
                    <div style={{
                        width: '100%',
                        display: "flex",
                        gap: "2px",
                        borderRadius: "20px",
                        overflow: "hidden"
                    }}>
                        <div style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2px"
                        }}>
                            <div style={{
                                height: "50%",
                                aspectRatio: "16/9",
                                overflow: "hidden",
                            }}>
                                <img src={`images/${images[0]}`} alt="" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}/>
                            </div>
                            <div style={{
                                height: "50%",
                                aspectRatio: "16/9",
                                overflow: "hidden",
                            }}>
                                <img src={`images/${images[1]}`} alt="" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}/>
                            </div>
                        </div>
                        <div style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2px"
                        }}>
                            
                            <div style={{
                                height: "50%",
                                aspectRatio: "16/9",
                                overflow: "hidden",
                            }}>
                                <img src={`images/${images[2]}`} alt="" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}/>
                            </div>
                            <div style={{
                                height: "50%",
                                aspectRatio: "16/9",
                                overflow: "hidden",
                            }}>
                                <img src={`images/${images[3]}`} alt="" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}/>
                            </div>
                        </div>
                    </div>
                )
        }
    }

    return (
        <ImageGrid/>
    );
}

export default App;